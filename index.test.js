const index = require('./index');
require('jest');

test('Check winning condition 1', () => {
    let board = {
        d1: 'X',
        d2: 'X',
        d3: 'X',
        d4: '',
        d5: '',
        d6: '',
        d7: '',
        d8: '',
        d9: ''
    }    
    expect(index.hasWon(board, 'X')).toBe(true);
    
    board = {
        d1: 'O',
        d2: 'O',
        d3: 'O',
        d4: '',
        d5: '',
        d6: '',
        d7: '',
        d8: '',
        d9: ''
    }    
    expect(index.hasWon(board, 'O')).toBe(true);  
})

test('Check winning condition 2', () => {
    let board = {
        d1: '',
        d2: 'X',
        d3: '',
        d4: '',
        d5: 'X',
        d6: '',
        d7: '',
        d8: 'X',
        d9: ''
    }    
    expect(index.hasWon(board, 'X')).toBe(true);
    
    board = {
        d1: '',
        d2: 'O',
        d3: '',
        d4: '',
        d5: 'O',
        d6: '',
        d7: '',
        d8: 'O',
        d9: ''
    }    
    expect(index.hasWon(board, 'O')).toBe(true);  
})

test('Check winning condition 3', () => {
    let board = {
        d1: '',
        d2: '',
        d3: 'X',
        d4: '',
        d5: '',
        d6: 'X',
        d7: '',
        d8: '',
        d9: 'X'
    }    
    expect(index.hasWon(board, 'X')).toBe(true);
    
    board = {
        d1: '',
        d2: '',
        d3: 'O',
        d4: '',
        d5: '',
        d6: 'O',
        d7: '',
        d8: '',
        d9: 'O'
    }    
    expect(index.hasWon(board, 'O')).toBe(true);  
})

test('Check winning condition 4', () => {
    let board = {
        d1: 'X',
        d2: '',
        d3: '',
        d4: 'X',
        d5: '',
        d6: '',
        d7: 'X',
        d8: '',
        d9: ''
    }    
    expect(index.hasWon(board, 'X')).toBe(true);
    
    board = {
        d1: 'O',
        d2: '',
        d3: '',
        d4: 'O',
        d5: '',
        d6: '',
        d7: 'O',
        d8: '',
        d9: 'O'
    }    
    expect(index.hasWon(board, 'O')).toBe(true);  
})

test('Check winning condition 5', () => {
    let board = {
        d1: '',
        d2: '',
        d3: '',
        d4: 'X',
        d5: 'X',
        d6: 'X',
        d7: '',
        d8: '',
        d9: ''
    }    
    expect(index.hasWon(board, 'X')).toBe(true);
    
    board = {
        d1: '',
        d2: '',
        d3: '',
        d4: 'O',
        d5: 'O',
        d6: 'O',
        d7: '',
        d8: '',
        d9: ''
    }    
    expect(index.hasWon(board, 'O')).toBe(true);  
})

test('Check winning condition 6', () => {
    let board = {
        d1: '',
        d2: '',
        d3: '',
        d4: '',
        d5: '',
        d6: '',
        d7: 'X',
        d8: 'X',
        d9: 'X'
    }    
    expect(index.hasWon(board, 'X')).toBe(true);
    
    board = {
        d1: '',
        d2: '',
        d3: '',
        d4: '',
        d5: '',
        d6: '',
        d7: 'O',
        d8: 'O',
        d9: 'O'
    }    
    expect(index.hasWon(board, 'O')).toBe(true);  
})

test('Check winning condition 7', () => {
    let board = {
        d1: 'X',
        d2: '',
        d3: '',
        d4: '',
        d5: 'X',
        d6: '',
        d7: '',
        d8: '',
        d9: 'X'
    }    
    expect(index.hasWon(board, 'X')).toBe(true);
    
    board = {
        d1: 'O',
        d2: '',
        d3: '',
        d4: '',
        d5: 'O',
        d6: '',
        d7: '',
        d8: '',
        d9: 'O'
    }    
    expect(index.hasWon(board, 'O')).toBe(true);  
})

test('Check winning condition 8', () => {
    let board = {
        d1: '',
        d2: '',
        d3: 'X',
        d4: '',
        d5: 'X',
        d6: '',
        d7: 'X',
        d8: '',
        d9: ''
    }    
    expect(index.hasWon(board, 'X')).toBe(true);
    
    board = {
        d1: '',
        d2: '',
        d3: 'O',
        d4: '',
        d5: 'O',
        d6: '',
        d7: 'O',
        d8: '',
        d9: ''
    }    
    expect(index.hasWon(board, 'O')).toBe(true);  
})

test('Check for draw', () => {
    let board = {
        d1: 'X',
        d2: 'O',
        d3: 'X',
        d4: 'O',
        d5: 'X',
        d6: 'O',
        d7: 'O',
        d8: 'X',
        d9: 'O'
    }    

    expect(index.hasDraw(board)).toBe(true);
})