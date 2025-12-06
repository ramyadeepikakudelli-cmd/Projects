#include <iostream>
#include <vector>
#include <string>
using namespace std;

class TrieNode {
public:
    TrieNode* children[26];
    bool isEnd;

    TrieNode() {
        isEnd = false;
        for(int i = 0; i < 26; i++) children[i] = nullptr;
    }
};

class Trie {
public:
    TrieNode* root;
    Trie() { root = new TrieNode(); }

    void insert(string word) {
        TrieNode* node = root;
        for(char c : word) {
            int i = c - 'a';
            if(!node->children[i]) node->children[i] = new TrieNode();
            node = node->children[i];
        }
        node->isEnd = true;
    }

    bool search(string word) {
        TrieNode* node = root;
        for(char c : word) {
            int i = c - 'a';
            if(!node->children[i]) return false;
            node = node->children[i];
        }
        return node->isEnd;
    }
};

string dictWords[] = {
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
};

int main() {
    cout << "Content-Type: text/plain\n\n";

    Trie trie;
    for(string w : dictWords) trie.insert(w);

    string word;
    cin >> word;

    if (trie.search(word)) cout << "FOUND";
    else cout << "NOT_FOUND";

    return 0;
}
