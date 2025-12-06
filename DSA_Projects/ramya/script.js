class TrieNode {
    constructor() {
        this.children = new Array(26).fill(null);
        this.isEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let c of word) {
            let index = c.charCodeAt(0) - 97;
            if (!node.children[index]) {
                node.children[index] = new TrieNode();
            }
            node = node.children[index];
        }
        node.isEnd = true;
    }

    search(word) {
        let node = this.root;
        for (let c of word) {
            let index = c.charCodeAt(0) - 97;
            if (!node.children[index])
                return false;
            node = node.children[index];
        }
        return node.isEnd;
    }
}

const trie = new Trie();

const words = [
   "apple","ball","car","cat","dog","hat","mango","pen","nest","carry",
"bat","banana","book","bell","box","bag","cup","cap","cow","cake",
"door","duck","doll","dust","ear","egg","elk","eye","east",
"fan","fish","flag","fog","farm","fire","gift","goat","grape","glass",
"hand","hen","hill","home","horse","hook","ice","iron","ink","item",
"jug","jam","jeep","jelly","jar","join","kite","key","king","kid",
"lion","lamp","leaf","lot","lime","lake","mug","mouse","milk","map",
"nest","net","nose","nail","name","orange","owl","ox","oil","oven",
"pig","pin","pot","pen","pear","queen","quiz","quill","quiet","quick",
"rat","red","run","rice","ring","rose","sun","sit","sand","ship"
];

words.forEach(word => trie.insert(word));

function searchWord() {
    let word = document.getElementById("wordInput").value.toLowerCase();
    let result = document.getElementById("resultArea");

    if (word === "") {
        result.textContent = "Please enter a word.";
        result.className = "result not-found";
        return;
    }

    if (trie.search(word)) {
        result.textContent = `"${word}" FOUND in dictionary 😊`;
        result.className = "result found";
    } else {
        result.textContent = `"${word}" NOT found 😔`;
        result.className = "result not-found";
    }
}

window.searchWord = searchWord;   // 🔥 MAKES BUTTON WORK
