(function(){
"use strict";
const $=id=>document.getElementById(id), grid=$("gameGrid"), stage=$("gameStage"), mount=$("gameMount");
const games=[
{id:"chess",name:"দাবা (Chess)",icon:"♟️",desc:"দুইজনের কৌশলের লড়াই",about:"দুইজন মিলে একই ফোনে খেলুন। বৈধ চাল, Check ও Checkmate—Chess.js নিয়ম ইঞ্জিন।"},
{id:"racer",name:"কার রেসিং",icon:"🏎️",desc:"গাড়ি চালিয়ে বাধা এড়িয়ে যান",about:"বাম-ডানে সরে অন্য গাড়ি এড়িয়ে যতদূর পারেন যান।"},
{id:"snake",name:"সাপের খেলা",icon:"🐍",desc:"খাবার খান, বড় হন",about:"তীর চিহ্ন বা স্ক্রিনের বোতাম দিয়ে সাপ চালান। নিজের গায়ে বা দেয়ালে লাগলে খেলা শেষ।"},
{id:"ttt",name:"Tic Tac Toe",icon:"⭕",desc:"X ও O-এর তিনটি এক লাইনে",about:"একই ডিভাইসে দুইজন পালা করে খেলুন।"},
{id:"memory",name:"মেমোরি ম্যাচ",icon:"🧠",desc:"একই ছবির জোড়া খুঁজুন",about:"কার্ড উল্টে একই জোড়া মিলিয়ে সব কার্ড শেষ করুন।"},
{id:"2048",name:"2048",icon:"🔢",desc:"সংখ্যা মিলিয়ে 2048 করুন",about:"তীর চিহ্ন বা নিচের বোতাম দিয়ে একই সংখ্যা যোগ করুন।"},
{id:"breakout",name:"ব্রিক ব্রেকার",icon:"🧱",desc:"বল দিয়ে ইট ভাঙুন",about:"প্যাডেল সরিয়ে বল আটকে রাখুন এবং সব ইট ভাঙুন।"},
{id:"mines",name:"মাইনসুইপার",icon:"💣",desc:"বোমা এড়িয়ে ঘর খুলুন",about:"সংখ্যা পাশের বোমার সংখ্যা বলে। কোনো বোমায় চাপ দেবেন না।"},
{id:"sudoku",name:"সুডোকু",icon:"🔟",desc:"১ থেকে ৯ বসিয়ে ধাঁধা মেলান",about:"প্রতি সারি, কলাম ও ৩×৩ ঘরে ১–৯ একবার করে বসান।"},
{id:"flappy",name:"ফ্ল্যাপি বার্ড",icon:"🐤",desc:"বাধার ফাঁক দিয়ে উড়ুন",about:"Tap বা Space চাপলে পাখি ওপরে উঠবে। পাইপে ধাক্কা খাবেন না।"}
,
{id:"rps",name:"Rock Paper Scissors",icon:"✊",desc:"কম্পিউটারের সঙ্গে খেলুন",about:"কম্পিউটারের সঙ্গে খেলুন — ব্রাউজারেই খেলুন।"},
{id:"dice",name:"Dice Roll",icon:"🎲",desc:"পাশা নিক্ষেপ করুন",about:"পাশা নিক্ষেপ করুন — ব্রাউজারেই খেলুন।"},
{id:"coin",name:"Coin Toss",icon:"🪙",desc:"হেডস নাকি টেল",about:"হেডস নাকি টেল — ব্রাউজারেই খেলুন।"},
{id:"mathquiz",name:"Math Challenge",icon:"➗",desc:"দ্রুত অঙ্ক সমাধান",about:"দ্রুত অঙ্ক সমাধান — ব্রাউজারেই খেলুন।"},
{id:"geoquiz",name:"বাংলাদেশ কুইজ",icon:"🇧🇩",desc:"বাংলাদেশ সম্পর্কে জানুন",about:"বাংলাদেশ সম্পর্কে জানুন — ব্রাউজারেই খেলুন।"},
{id:"generalquiz",name:"সাধারণ জ্ঞান",icon:"🧠",desc:"জ্ঞান যাচাই করুন",about:"জ্ঞান যাচাই করুন — ব্রাউজারেই খেলুন।"},
{id:"typing",name:"Typing Speed",icon:"⌨️",desc:"দ্রুত টাইপের অনুশীলন",about:"দ্রুত টাইপের অনুশীলন — ব্রাউজারেই খেলুন।"},
{id:"scramble",name:"Word Scramble",icon:"🔤",desc:"অক্ষর সাজিয়ে শব্দ বানান",about:"অক্ষর সাজিয়ে শব্দ বানান — ব্রাউজারেই খেলুন।"},
{id:"hangman",name:"Hangman",icon:"🪢",desc:"শব্দ অনুমান করুন",about:"শব্দ অনুমান করুন — ব্রাউজারেই খেলুন।"},
{id:"numberguess",name:"Number Guess",icon:"🔍",desc:"গোপন সংখ্যা খুঁজুন",about:"গোপন সংখ্যা খুঁজুন — ব্রাউজারেই খেলুন।"},
{id:"reaction",name:"Reaction Test",icon:"⚡",desc:"প্রতিক্রিয়ার গতি মাপুন",about:"প্রতিক্রিয়ার গতি মাপুন — ব্রাউজারেই খেলুন।"},
{id:"clicker",name:"৩০ সেকেন্ড ক্লিকার",icon:"👆",desc:"দ্রুত চাপ দিন",about:"দ্রুত চাপ দিন — ব্রাউজারেই খেলুন।"},
{id:"whack",name:"Whack-a-Mole",icon:"🐹",desc:"লক্ষ্যবস্তুতে চাপ দিন",about:"লক্ষ্যবস্তুতে চাপ দিন — ব্রাউজারেই খেলুন।"},
{id:"colormatch",name:"Color Match",icon:"🎨",desc:"রঙ মিলিয়ে উত্তর দিন",about:"রঙ মিলিয়ে উত্তর দিন — ব্রাউজারেই খেলুন।"},
{id:"pattern",name:"Pattern Memory",icon:"🧩",desc:"আলোর ক্রম মনে রাখুন",about:"আলোর ক্রম মনে রাখুন — ব্রাউজারেই খেলুন।"},
{id:"lightsout",name:"Lights Out",icon:"💡",desc:"সব আলো নিভিয়ে দিন",about:"সব আলো নিভিয়ে দিন — ব্রাউজারেই খেলুন।"},
{id:"connect4",name:"Connect Four",icon:"🔴",desc:"চারটি গুটি এক লাইনে আনুন",about:"চারটি গুটি এক লাইনে আনুন — ব্রাউজারেই খেলুন।"},
{id:"fifteen",name:"15 Puzzle",icon:"🔢",desc:"সংখ্যার ঘর সাজান",about:"সংখ্যার ঘর সাজান — ব্রাউজারেই খেলুন।"},
{id:"maze",name:"Maze Escape",icon:"🧭",desc:"গোলকধাঁধা থেকে বের হন",about:"গোলকধাঁধা থেকে বের হন — ব্রাউজারেই খেলুন।"},
{id:"pong",name:"Pong",icon:"🏓",desc:"বল ফিরিয়ে খেলুন",about:"বল ফিরিয়ে খেলুন — ব্রাউজারেই খেলুন।"},
{id:"basketball",name:"Basketball Shot",icon:"🏀",desc:"বাস্কেটে বল ফেলুন",about:"বাস্কেটে বল ফেলুন — ব্রাউজারেই খেলুন।"},
{id:"penalty",name:"Penalty Kick",icon:"⚽",desc:"পেনাল্টি শট নিন",about:"পেনাল্টি শট নিন — ব্রাউজারেই খেলুন।"},
{id:"golf",name:"Mini Golf",icon:"⛳",desc:"লক্ষ্যে বল পৌঁছান",about:"লক্ষ্যে বল পৌঁছান — ব্রাউজারেই খেলুন।"},
{id:"space",name:"Space Shooter",icon:"🚀",desc:"মহাকাশে শত্রু ঠেকান",about:"মহাকাশে শত্রু ঠেকান — ব্রাউজারেই খেলুন।"},
{id:"asteroid",name:"Asteroid Dodge",icon:"☄️",desc:"উল্কা এড়িয়ে চলুন",about:"উল্কা এড়িয়ে চলুন — ব্রাউজারেই খেলুন।"},
{id:"runner",name:"Endless Runner",icon:"🏃",desc:"দৌড়ে বাধা পার হন",about:"দৌড়ে বাধা পার হন — ব্রাউজারেই খেলুন।"},
{id:"fruitcatch",name:"Fruit Catch",icon:"🍉",desc:"পড়ে যাওয়া ফল ধরুন",about:"পড়ে যাওয়া ফল ধরুন — ব্রাউজারেই খেলুন।"},
{id:"bubble",name:"Bubble Pop",icon:"🫧",desc:"বুদবুদ ফাটান",about:"বুদবুদ ফাটান — ব্রাউজারেই খেলুন।"},
{id:"stack",name:"Tower Stack",icon:"🏗️",desc:"টাওয়ার তৈরি করুন",about:"টাওয়ার তৈরি করুন — ব্রাউজারেই খেলুন।"},
{id:"jump",name:"Platform Jump",icon:"🦘",desc:"লাফিয়ে প্ল্যাটফর্ম পার হন",about:"লাফিয়ে প্ল্যাটফর্ম পার হন — ব্রাউজারেই খেলুন।"},
{id:"fishing",name:"Fishing Time",icon:"🎣",desc:"মাছ ধরুন",about:"মাছ ধরুন — ব্রাউজারেই খেলুন।"},
{id:"archery",name:"Archery",icon:"🏹",desc:"লক্ষ্যভেদ করুন",about:"লক্ষ্যভেদ করুন — ব্রাউজারেই খেলুন।"},
{id:"brick2",name:"Brick Challenge",icon:"🧱",desc:"ইট ভাঙুন",about:"ইট ভাঙুন — ব্রাউজারেই খেলুন।"},
{id:"animalmemory",name:"Animal Memory",icon:"🐼",desc:"প্রাণীর জোড়া মিলান",about:"প্রাণীর জোড়া মিলান — ব্রাউজারেই খেলুন।"},
{id:"fruitmemory",name:"Fruit Memory",icon:"🍓",desc:"ফলের জোড়া মিলান",about:"ফলের জোড়া মিলান — ব্রাউজারেই খেলুন।"},
{id:"emojimemory",name:"Emoji Memory",icon:"😃",desc:"ইমোজির জোড়া খুঁজুন",about:"ইমোজির জোড়া খুঁজুন — ব্রাউজারেই খেলুন।"},
{id:"quickcount",name:"Quick Count",icon:"🔢",desc:"দ্রুত গুনে উত্তর দিন",about:"দ্রুত গুনে উত্তর দিন — ব্রাউজারেই খেলুন।"},
{id:"oddone",name:"Odd One Out",icon:"👀",desc:"ভিন্নটি খুঁজুন",about:"ভিন্নটি খুঁজুন — ব্রাউজারেই খেলুন।"},
{id:"sequence",name:"Number Sequence",icon:"🔣",desc:"পরের সংখ্যা অনুমান করুন",about:"পরের সংখ্যা অনুমান করুন — ব্রাউজারেই খেলুন।"},
{id:"speedmath",name:"Speed Math",icon:"⏱️",desc:"সময় ধরে অঙ্ক করুন",about:"সময় ধরে অঙ্ক করুন — ব্রাউজারেই খেলুন।"},
{id:"solitaire",name:"সোলিটেয়ার",icon:"🃏",desc:"কার্ড সাজিয়ে খেলুন",about:"কার্ড সাজিয়ে খেলুন — ব্রাউজারে খেলুন।"},
{id:"checkers",name:"চেকার্স",icon:"🔴",desc:"প্রতিপক্ষের গুটি ধরুন",about:"প্রতিপক্ষের গুটি ধরুন — ব্রাউজারে খেলুন।"},
{id:"backgammon",name:"ব্যাকগ্যামন",icon:"🎲",desc:"কৌশলে গুটি চালুন",about:"কৌশলে গুটি চালুন — ব্রাউজারে খেলুন।"},
{id:"domino",name:"ডমিনো",icon:"🁣",desc:"মিলিয়ে ডমিনো বসান",about:"মিলিয়ে ডমিনো বসান — ব্রাউজারে খেলুন।"},
{id:"gomoku",name:"গোমোকু",icon:"⚫",desc:"পাঁচটি গুটি এক লাইনে আনুন",about:"পাঁচটি গুটি এক লাইনে আনুন — ব্রাউজারে খেলুন।"},
{id:"reversi",name:"রিভার্সি",icon:"⚪",desc:"প্রতিপক্ষের গুটি নিজের রঙে আনুন",about:"প্রতিপক্ষের গুটি নিজের রঙে আনুন — ব্রাউজারে খেলুন।"},
{id:"wordsearch",name:"Word Search",icon:"🔎",desc:"অক্ষরের ভিড়ে শব্দ খুঁজুন",about:"অক্ষরের ভিড়ে শব্দ খুঁজুন — ব্রাউজারে খেলুন।"},
{id:"crossword",name:"Mini Crossword",icon:"📝",desc:"শব্দের ধাঁধা সমাধান করুন",about:"শব্দের ধাঁধা সমাধান করুন — ব্রাউজারে খেলুন।"},
{id:"anagram",name:"Anagram",icon:"🔠",desc:"অক্ষর সাজিয়ে শব্দ বানান",about:"অক্ষর সাজিয়ে শব্দ বানান — ব্রাউজারে খেলুন।"},
{id:"simon",name:"Simon Says",icon:"🌈",desc:"রঙের ক্রম মনে রাখুন",about:"রঙের ক্রম মনে রাখুন — ব্রাউজারে খেলুন।"},
{id:"simon2",name:"Sound Pattern",icon:"🎵",desc:"শব্দের ক্রম মনে রাখুন",about:"শব্দের ক্রম মনে রাখুন — ব্রাউজারে খেলুন।"},
{id:"colorflood",name:"Color Flood",icon:"🟦",desc:"এক রঙে বোর্ড ভরুন",about:"এক রঙে বোর্ড ভরুন — ব্রাউজারে খেলুন।"},
{id:"minisokoban",name:"Sokoban",icon:"📦",desc:"বাক্স নির্দিষ্ট স্থানে নিন",about:"বাক্স নির্দিষ্ট স্থানে নিন — ব্রাউজারে খেলুন।"},
{id:"tictactoe3d",name:"Tic Tac Toe 3D",icon:"❎",desc:"ত্রিমাত্রিক ঘরে চাল দিন",about:"ত্রিমাত্রিক ঘরে চাল দিন — ব্রাউজারে খেলুন।"},
{id:"dotsboxes",name:"Dots and Boxes",icon:"🔳",desc:"রেখা টেনে ঘর পূরণ করুন",about:"রেখা টেনে ঘর পূরণ করুন — ব্রাউজারে খেলুন।"},
{id:"nim",name:"Nim Game",icon:"🪵",desc:"শেষ কাঠি এড়িয়ে জিতুন",about:"শেষ কাঠি এড়িয়ে জিতুন — ব্রাউজারে খেলুন।"},
{id:"nimble",name:"Take Away",icon:"➖",desc:"সঠিক সংখ্যক বস্তু সরান",about:"সঠিক সংখ্যক বস্তু সরান — ব্রাউজারে খেলুন।"},
{id:"higherlower",name:"Higher or Lower",icon:"📈",desc:"পরের কার্ড বড় না ছোট বলুন",about:"পরের কার্ড বড় না ছোট বলুন — ব্রাউজারে খেলুন।"},
{id:"blackjack",name:"Blackjack 21",icon:"🂡",desc:"২১-এর কাছাকাছি স্কোর করুন",about:"২১-এর কাছাকাছি স্কোর করুন — ব্রাউজারে খেলুন।"},
{id:"warcards",name:"কার্ড যুদ্ধ",icon:"🃏",desc:"বড় কার্ডটি জিতবে",about:"বড় কার্ডটি জিতবে — ব্রাউজারে খেলুন।"},
{id:"battleship",name:"Battleship",icon:"🚢",desc:"লুকানো জাহাজ খুঁজুন",about:"লুকানো জাহাজ খুঁজুন — ব্রাউজারে খেলুন।"},
{id:"mastermind",name:"Mastermind",icon:"🔐",desc:"রঙের গোপন কোড ভাঙুন",about:"রঙের গোপন কোড ভাঙুন — ব্রাউজারে খেলুন।"},
{id:"pegsolitaire",name:"Peg Solitaire",icon:"🔵",desc:"লাফিয়ে গুটি কমান",about:"লাফিয়ে গুটি কমান — ব্রাউজারে খেলুন।"},
{id:"hex",name:"Hex",icon:"⬡",desc:"নিজের দুই প্রান্ত যুক্ত করুন",about:"নিজের দুই প্রান্ত যুক্ত করুন — ব্রাউজারে খেলুন।"},
{id:"nonogram",name:"Nonogram",icon:"🧩",desc:"সংখ্যার সূত্রে ছবি আঁকুন",about:"সংখ্যার সূত্রে ছবি আঁকুন — ব্রাউজারে খেলুন।"},
{id:"minesweeper2",name:"Mini Mines",icon:"💥",desc:"নিরাপদ ঘর খুঁজুন",about:"নিরাপদ ঘর খুঁজুন — ব্রাউজারে খেলুন।"},
{id:"towerdefense",name:"Tower Defense",icon:"🏰",desc:"দুর্গ রক্ষা করুন",about:"দুর্গ রক্ষা করুন — ব্রাউজারে খেলুন।"},
{id:"targetpractice",name:"Target Practice",icon:"🎯",desc:"লক্ষ্যে আঘাত করুন",about:"লক্ষ্যে আঘাত করুন — ব্রাউজারে খেলুন।"},
{id:"knifehit",name:"Knife Hit",icon:"🔪",desc:"ঘূর্ণায়মান লক্ষ্যে ছুঁড়ুন",about:"ঘূর্ণায়মান লক্ষ্যে ছুঁড়ুন — ব্রাউজারে খেলুন।"},
{id:"bottleflip",name:"Bottle Flip",icon:"🍾",desc:"বোতল উল্টে দাঁড় করান",about:"বোতল উল্টে দাঁড় করান — ব্রাউজারে খেলুন।"},
{id:"soccerjuggle",name:"Soccer Juggle",icon:"⚽",desc:"বল মাটিতে পড়তে দেবেন না",about:"বল মাটিতে পড়তে দেবেন না — ব্রাউজারে খেলুন।"},
{id:"volleyball",name:"ভলিবল",icon:"🏐",desc:"বল ফিরিয়ে দিন",about:"বল ফিরিয়ে দিন — ব্রাউজারে খেলুন।"},
{id:"tennis",name:"টেনিস",icon:"🎾",desc:"র‍্যাকেট দিয়ে বল মারুন",about:"র‍্যাকেট দিয়ে বল মারুন — ব্রাউজারে খেলুন।"},
{id:"bowling",name:"বোলিং",icon:"🎳",desc:"সব পিন ফেলে দিন",about:"সব পিন ফেলে দিন — ব্রাউজারে খেলুন।"},
{id:"pool",name:"বিলিয়ার্ড",icon:"🎱",desc:"পকেটে বল ফেলুন",about:"পকেটে বল ফেলুন — ব্রাউজারে খেলুন।"},
{id:"darts",name:"ডার্টস",icon:"🎯",desc:"টার্গেটে পয়েন্ট করুন",about:"টার্গেটে পয়েন্ট করুন — ব্রাউজারে খেলুন।"},
{id:"ski",name:"Ski Slalom",icon:"⛷️",desc:"গাছ এড়িয়ে স্কি করুন",about:"গাছ এড়িয়ে স্কি করুন — ব্রাউজারে খেলুন।"},
{id:"bike",name:"Bike Trial",icon:"🚴",desc:"বাধা পেরিয়ে সাইকেল চালান",about:"বাধা পেরিয়ে সাইকেল চালান — ব্রাউজারে খেলুন।"},
{id:"carparking",name:"Car Parking",icon:"🅿️",desc:"গাড়ি পার্ক করুন",about:"গাড়ি পার্ক করুন — ব্রাউজারে খেলুন।"},
{id:"traffic",name:"Traffic Control",icon:"🚦",desc:"ট্রাফিক সামলান",about:"ট্রাফিক সামলান — ব্রাউজারে খেলুন।"},
{id:"submarine",name:"Submarine",icon:"🛥️",desc:"সমুদ্রের বাধা এড়িয়ে চলুন",about:"সমুদ্রের বাধা এড়িয়ে চলুন — ব্রাউজারে খেলুন।"},
{id:"rocketlanding",name:"Rocket Landing",icon:"🛬",desc:"রকেট নিরাপদে নামান",about:"রকেট নিরাপদে নামান — ব্রাউজারে খেলুন।"},
{id:"planetmatch",name:"Planet Match",icon:"🪐",desc:"গ্রহের জোড়া মেলান",about:"গ্রহের জোড়া মেলান — ব্রাউজারে খেলুন।"},
{id:"stargazer",name:"Star Catcher",icon:"🌟",desc:"তারকা সংগ্রহ করুন",about:"তারকা সংগ্রহ করুন — ব্রাউজারে খেলুন।"},
{id:"dinosaur",name:"Dino Run",icon:"🦖",desc:"ডাইনোসর নিয়ে বাধা পার হন",about:"ডাইনোসর নিয়ে বাধা পার হন — ব্রাউজারে খেলুন।"},
{id:"penguin",name:"Penguin Slide",icon:"🐧",desc:"বরফে স্লাইড করুন",about:"বরফে স্লাইড করুন — ব্রাউজারে খেলুন।"},
{id:"bee",name:"Bee Garden",icon:"🐝",desc:"ফুল থেকে মধু সংগ্রহ করুন",about:"ফুল থেকে মধু সংগ্রহ করুন — ব্রাউজারে খেলুন।"},
{id:"gardening",name:"Garden Match",icon:"🌻",desc:"বাগানের জিনিস মিলান",about:"বাগানের জিনিস মিলান — ব্রাউজারে খেলুন।"},
{id:"cooking",name:"Quick Chef",icon:"🍳",desc:"দ্রুত খাবারের অর্ডার মিলান",about:"দ্রুত খাবারের অর্ডার মিলান — ব্রাউজারে খেলুন।"},
{id:"treasure",name:"Treasure Hunt",icon:"💰",desc:"লুকানো ধন খুঁজুন",about:"লুকানো ধন খুঁজুন — ব্রাউজারে খেলুন।"},
];
let cleanup=null;
function cardList(list=games){grid.innerHTML=list.map(g=>'<button class="game-card" data-game="'+g.id+'"><span class="game-icon">'+g.icon+'</span><strong>'+g.name+'</strong><small>'+g.desc+'</small></button>').join("");}
function shell(g){stage.hidden=false;$("activeTitle").textContent=g.icon+" "+g.name;$("activeDescription").textContent=g.about;mount.innerHTML="";window.scrollTo({top:stage.offsetTop-10,behavior:"smooth"});}
function panel(html){mount.innerHTML='<div class="game-panel">'+html+'</div>';}
function toolbar(html){return '<div class="game-toolbar">'+html+'</div>';}
function msg(t){const e=$("gameMessage");if(e)e.textContent=t;}
function btn(t,fn,cls="game-action"){const b=document.createElement("button");b.textContent=t;b.className=cls;b.onclick=fn;return b;}
function startGame(id){
 if(cleanup){cleanup();cleanup=null;}const g=games.find(x=>x.id===id);if(!g)return;shell(g);
 const launch=({chess,racer,snake,ttt,memory,2048:game2048,breakout,mines,sudoku,flappy}[id]);(launch||(()=>extraGame(id)))();
}
grid.addEventListener("click",e=>{const b=e.target.closest("[data-game]");if(b)startGame(b.dataset.game);});
$("gameSearch").addEventListener("input",e=>{const q=e.target.value.toLowerCase();cardList(games.filter(g=>(g.name+" "+g.desc).toLowerCase().includes(q)));});
$("backToGames").onclick=()=>{if(cleanup){cleanup();cleanup=null;}stage.hidden=true;window.scrollTo({top:$("gameGrid").offsetTop-100,behavior:"smooth"});};
function chess(){
 if(!window.Chess){panel('<p class="game-message">দাবা লোড হচ্ছে… ইন্টারনেট সংযোগ চালু রাখুন।</p>');return;}
 const game=new Chess();let selected=null;
 panel(toolbar('<span id="chessTurn">সাদা চাল দিন</span><button id="chessReset" class="game-action">নতুন খেলা</button>')+'<div id="chessBoard" class="game-board chess-board"></div><p id="gameMessage" class="game-message">সাদা দিয়ে শুরু করুন।</p>');
 const board=$("chessBoard");
 function draw(){board.innerHTML="";const a=game.board();a.forEach((row,r)=>row.forEach((p,c)=>{const sq="abcdefgh"[c]+(8-r),b=document.createElement("button");b.className=((r+c)%2?"dark":"light")+(selected===sq?" selected":"");b.textContent=p?({wk:"♔",wq:"♕",wr:"♖",wb:"♗",wn:"♘",wp:"♙",bk:"♚",bq:"♛",br:"♜",bb:"♝",bn:"♞",bp:"♟"}[p.color+p.type]):"";b.setAttribute("aria-label",sq);b.onclick=()=>tap(sq);board.append(b);}));$("chessTurn").textContent=game.turn()==="w"?"সাদার চাল":"কালোর চাল";if(game.game_over())msg(game.in_checkmate()?"Checkmate! "+(game.turn()==="w"?"কালো":"সাদা")+" জিতেছে।": "খেলা শেষ — ড্র।");}
 function tap(sq){if(game.game_over())return;if(selected){let m=game.move({from:selected,to:sq,promotion:"q"});if(m){selected=null;draw();if(!game.game_over())msg(m.san+" — চাল সম্পন্ন");return;}}const p=game.get(sq);selected=p&&p.color===game.turn()?sq:null;draw();}
 $("chessReset").onclick=()=>{game.reset();selected=null;draw();msg("নতুন খেলা শুরু হয়েছে।");};draw();
}
function racer(){
 panel(toolbar('<span>স্কোর: <b id="carScore">0</b></span><span>বাধা এড়িয়ে চলুন</span>')+'<canvas id="carCanvas" class="car-board" width="360" height="560"></canvas><div class="car-controls"><button id="carLeft" class="game-action">◀ বামে</button><button id="carStart" class="game-action">শুরু / আবার</button><button id="carRight" class="game-action">ডানে ▶</button></div><p id="gameMessage" class="game-message">শুরু চাপুন; কিবোর্ডের ← →-ও ব্যবহার করতে পারবেন।</p>');
 const c=$("carCanvas"),x=c.getContext("2d");let lane=1,obs=[],score=0,run=false,raf=0,last=0,spawn=0;
 function draw(t){x.fillStyle="#254c3d";x.fillRect(0,0,360,560);x.fillStyle="#343a3d";x.fillRect(52,0,256,560);x.strokeStyle="#f6f0cf";x.setLineDash([26,24]);x.lineWidth=4;x.lineDashOffset=-(t/18)%50;x.beginPath();x.moveTo(137,0);x.lineTo(137,560);x.moveTo(223,0);x.lineTo(223,560);x.stroke();x.setLineDash([]);obs.forEach(o=>{x.fillStyle="#e75b4b";x.fillRect(65+o.l*86,o.y,54,82);x.fillStyle="#fff";x.fillRect(73+o.l*86,o.y+12,38,15);});x.fillStyle="#25b9e4";x.fillRect(65+lane*86,465,54,78);x.fillStyle="#c6f5ff";x.fillRect(73+lane*86,477,38,15);}
 function loop(t){if(!run)return;let dt=Math.min(35,t-last||16);last=t;spawn+=dt;if(spawn>850){obs.push({l:Math.floor(Math.random()*3),y:-90});spawn=0;}obs.forEach(o=>o.y+=dt*.24+2);obs=obs.filter(o=>o.y<580);score+=dt/120; $("carScore").textContent=Math.floor(score);draw(t);if(obs.some(o=>o.l===lane&&o.y>395&&o.y<535)){run=false;msg("ধাক্কা লেগেছে! স্কোর: "+Math.floor(score)+" — আবার শুরু করুন।");return;}raf=requestAnimationFrame(loop);}
 function start(){cancelAnimationFrame(raf);lane=1;obs=[];score=0;spawn=0;last=0;run=true;msg("চালিয়ে যান!");raf=requestAnimationFrame(loop);}
 function move(d){lane=Math.max(0,Math.min(2,lane+d));if(!run)draw(0);}
 const key=e=>{if(e.key==="ArrowLeft"){e.preventDefault();move(-1);}if(e.key==="ArrowRight"){e.preventDefault();move(1);}if(e.key===" "&&!run)start();};document.addEventListener("keydown",key);
 $("carLeft").onclick=()=>move(-1);$("carRight").onclick=()=>move(1);$("carStart").onclick=start;draw(0);cleanup=()=>{run=false;cancelAnimationFrame(raf);document.removeEventListener("keydown",key);};
}
function snake(){
 panel(toolbar('স্কোর: <b id="snakeScore">0</b>')+'<canvas id="snakeCanvas" class="snake-board" width="400" height="400"></canvas><div class="car-controls"><button id="snUp" class="game-action">↑</button></div><div class="car-controls"><button id="snLeft" class="game-action">←</button><button id="snDown" class="game-action">↓</button><button id="snRight" class="game-action">→</button><button id="snReset" class="secondary-btn">আবার</button></div><p id="gameMessage" class="game-message">শুরু করতে যেকোনো দিকের বোতাম চাপুন।</p>');
 const c=$("snakeCanvas"),x=c.getContext("2d");let s=[{x:8,y:8},{x:7,y:8},{x:6,y:8}],d={x:1,y:0},food={x:13,y:8},timer=0,over=false,score=0;
 function place(){food={x:Math.floor(Math.random()*20),y:Math.floor(Math.random()*20)};if(s.some(p=>p.x===food.x&&p.y===food.y))place();}
 function draw(){x.fillStyle="#102d25";x.fillRect(0,0,400,400);x.fillStyle="#ef6262";x.fillRect(food.x*20+2,food.y*20+2,16,16);s.forEach((p,i)=>{x.fillStyle=i?"#8bd4a4":"#27c779";x.fillRect(p.x*20+1,p.y*20+1,18,18);});}
 function tick(){if(over)return;const h={x:s[0].x+d.x,y:s[0].y+d.y};if(h.x<0||h.x>=20||h.y<0||h.y>=20||s.some(p=>p.x===h.x&&p.y===h.y)){over=true;msg("খেলা শেষ! স্কোর "+score);return;}s.unshift(h);if(h.x===food.x&&h.y===food.y){score++;$("snakeScore").textContent=score;place();}else s.pop();draw();}
 function dir(x1,y1){if(x1!==-d.x||y1!==-d.y)d={x:x1,y:y1};}
 const key=e=>{const m={ArrowUp:[0,-1],ArrowDown:[0,1],ArrowLeft:[-1,0],ArrowRight:[1,0]};if(m[e.key]){e.preventDefault();dir(...m[e.key]);if(!timer)timer=setInterval(tick,125);}};
 document.addEventListener("keydown",key);[["snUp",0,-1],["snDown",0,1],["snLeft",-1,0],["snRight",1,0]].forEach(([id,a,b])=>$(id).onclick=()=>{dir(a,b);if(!timer)timer=setInterval(tick,125);});
 $("snReset").onclick=()=>{clearInterval(timer);timer=0;s=[{x:8,y:8},{x:7,y:8},{x:6,y:8}];d={x:1,y:0};score=0;over=false;$("snakeScore").textContent=0;place();msg("নতুন খেলা শুরু করুন।");draw();};draw();cleanup=()=>{clearInterval(timer);document.removeEventListener("keydown",key);};
}
function ttt(){
 let a=Array(9).fill(""),turn="X",done=false;panel('<div class="game-toolbar">পালা: <b id="tttTurn">X</b></div><div class="game-board ttt-board" id="tttBoard"></div><p id="gameMessage" class="game-message">X দিয়ে শুরু করুন।</p><div class="game-toolbar"><button id="tttReset" class="game-action">নতুন খেলা</button></div>');
 const b=$("tttBoard");function draw(){b.innerHTML="";a.forEach((v,i)=>{const z=document.createElement("button");z.textContent=v;z.onclick=()=>{if(done||a[i])return;a[i]=turn;const win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]].some(line=>line.every(j=>a[j]===turn));if(win){done=true;msg(turn+" জিতেছে!");}else if(a.every(Boolean)){done=true;msg("ড্র হয়েছে!");}else{turn=turn==="X"?"O":"X";$("tttTurn").textContent=turn;}draw();};b.append(z);});}
 $("tttReset").onclick=()=>{a.fill("");turn="X";done=false;$("tttTurn").textContent=turn;msg("নতুন খেলা!");draw();};draw();
}
function memory(){
 const faces=["🍎","🚗","🐼","⚽","🌻","🎈","🐱","🚀"];let deck=[...faces,...faces].sort(()=>Math.random()-.5),open=[],matched=new Set(),moves=0,lock=false;
 panel(toolbar('চাল: <b id="memMoves">0</b> · জোড়া: <b id="memPairs">0/8</b>')+'<div class="game-board memory-board" id="memoryBoard"></div><p id="gameMessage" class="game-message">একই রকম দুটি কার্ড খুঁজুন।</p><div class="game-toolbar"><button id="memReset" class="game-action">আবার মেশান</button></div>');
 const b=$("memoryBoard");function draw(){b.innerHTML="";deck.forEach((f,i)=>{const z=document.createElement("button");z.textContent=matched.has(i)||open.includes(i)?f:"❔";z.disabled=matched.has(i)||open.includes(i)||lock;z.onclick=()=>flip(i);b.append(z);});}
 function flip(i){if(lock||open.includes(i)||matched.has(i))return;open.push(i);draw();if(open.length===2){moves++;$("memMoves").textContent=moves;if(deck[open[0]]===deck[open[1]]){open.forEach(j=>matched.add(j));open=[];$("memPairs").textContent=matched.size/2+"/8";draw();if(matched.size===16)msg("অভিনন্দন! সব জোড়া মিলেছে।");}else{lock=true;setTimeout(()=>{open=[];lock=false;draw();},750);}}}
 $("memReset").onclick=()=>{deck.sort(()=>Math.random()-.5);open=[];matched.clear();moves=0;lock=false;$("memMoves").textContent=0;$("memPairs").textContent="0/8";msg("নতুন করে শুরু করুন।");draw();};draw();
}
function game2048(){
 let a=Array(16).fill(0),score=0;function spawn(){let e=a.map((v,i)=>v===0?i:-1).filter(i=>i>=0);if(e.length)a[e[Math.floor(Math.random()*e.length)]]=Math.random()<.9?2:4;}
 panel(toolbar('স্কোর: <b id="score2048">0</b> · লক্ষ্য: 2048')+'<div class="game-board grid-2048" id="board2048"></div><div class="game-toolbar"><button class="game-action" data-dir="up">↑</button><button class="game-action" data-dir="left">←</button><button class="game-action" data-dir="down">↓</button><button class="game-action" data-dir="right">→</button><button id="reset2048" class="secondary-btn">আবার</button></div><p id="gameMessage" class="game-message">তীর চিহ্ন বা বোতাম ব্যবহার করুন।</p>');
 const b=$("board2048");function draw(){b.innerHTML="";a.forEach(v=>{const z=document.createElement("button");z.textContent=v||"";z.dataset.v=v;z.style.background=v>=128?"#e9b86a":v>=32?"#f1d29b":"";b.append(z);});$("score2048").textContent=score;}
 function move(dir){const old=a.slice();for(let line=0;line<4;line++){let ids=Array.from({length:4},(_,j)=>dir==="left"?line*4+j:dir==="right"?line*4+3-j:dir==="up"?j*4+line:(3-j)*4+line);let vals=ids.map(i=>a[i]).filter(Boolean),out=[];for(let j=0;j<vals.length;j++){if(vals[j]===vals[j+1]){out.push(vals[j]*2);score+=vals[j]*2;j++;}else out.push(vals[j]);}while(out.length<4)out.push(0);ids.forEach((id,j)=>a[id]=out[j]);}if(a.some((v,i)=>v!==old[i])){spawn();draw();if(a.includes(2048))msg("দারুণ! 2048 তৈরি করেছেন!");else if(![...["left","right","up","down"]].some(d=>canMove(d)))msg("আর কোনো চাল নেই — আবার শুরু করুন।");}}
 function canMove(d){let copy=a.slice();moveSim(d);let ok=a.some((v,i)=>v!==copy[i]);a=copy;return ok;}
 function moveSim(d){for(let l=0;l<4;l++){let ids=Array.from({length:4},(_,j)=>d==="left"?l*4+j:d==="right"?l*4+3-j:d==="up"?j*4+l:(3-j)*4+l),v=ids.map(i=>a[i]).filter(Boolean),o=[];for(let j=0;j<v.length;j++){if(v[j]===v[j+1]){o.push(v[j]*2);j++;}else o.push(v[j]);}while(o.length<4)o.push(0);ids.forEach((id,j)=>a[id]=o[j]);}}
 function key(e){const d={ArrowLeft:"left",ArrowRight:"right",ArrowUp:"up",ArrowDown:"down"}[e.key];if(d){e.preventDefault();move(d);}}
 document.addEventListener("keydown",key);b.parentElement.querySelectorAll("[data-dir]").forEach(z=>z.onclick=()=>move(z.dataset.dir));
 $("reset2048").onclick=()=>{a.fill(0);score=0;spawn();spawn();draw();msg("নতুন খেলা শুরু!");};spawn();spawn();draw();cleanup=()=>document.removeEventListener("keydown",key);
}
function breakout(){
 panel(toolbar('স্কোর: <b id="brickScore">0</b> · বল হারাবেন না')+'<canvas id="brickCanvas" class="breakout-board" width="420" height="500"></canvas><div class="breakout-controls"><button id="brickStart" class="game-action">শুরু / আবার</button><button id="brickLeft" class="secondary-btn">←</button><button id="brickRight" class="secondary-btn">→</button></div><p id="gameMessage" class="game-message">প্যাডেল সরিয়ে বল আটকে রাখুন।</p>');
 const c=$("brickCanvas"),x=c.getContext("2d");let paddle=170,ball={x:210,y:440,dx:3,dy:-4},bricks=[],run=false,raf=0,score=0;
 function reset(){paddle=170;ball={x:210,y:440,dx:3,dy:-4};score=0;bricks=Array.from({length:30},(_,i)=>({x:8+(i%6)*68,y:35+Math.floor(i/6)*27,on:true}));$("brickScore").textContent=0;draw();}
 function draw(){x.fillStyle="#142f27";x.fillRect(0,0,420,500);bricks.filter(b=>b.on).forEach((b,i)=>{x.fillStyle=["#f2bd55","#ea815c","#55b99b"][Math.floor(i/6)%3];x.fillRect(b.x,b.y,60,18);});x.fillStyle="#f6f0d8";x.fillRect(paddle,470,80,12);x.beginPath();x.arc(ball.x,ball.y,8,0,7);x.fill();}
 function loop(){if(!run)return;ball.x+=ball.dx;ball.y+=ball.dy;if(ball.x<8||ball.x>412)ball.dx*=-1;if(ball.y<8)ball.dy*=-1;if(ball.y>462&&ball.y<485&&ball.x>paddle-5&&ball.x<paddle+85){ball.dy=-Math.abs(ball.dy);ball.dx+=(ball.x-(paddle+40))*.025;}bricks.forEach(b=>{if(b.on&&ball.x>b.x&&ball.x<b.x+60&&ball.y>b.y&&ball.y<b.y+18){b.on=false;ball.dy*=-1;score+=10;$("brickScore").textContent=score;}});if(ball.y>510){run=false;msg("বল পড়ে গেছে। স্কোর "+score+" — আবার শুরু করুন।");return;}if(!bricks.some(b=>b.on)){run=false;msg("সব ইট ভেঙেছেন! অভিনন্দন।");return;}draw();raf=requestAnimationFrame(loop);}
 function start(){cancelAnimationFrame(raf);reset();run=true;msg("খেলা চলছে!");raf=requestAnimationFrame(loop);}
 const key=e=>{if(e.key==="ArrowLeft")paddle=Math.max(0,paddle-25);if(e.key==="ArrowRight")paddle=Math.min(340,paddle+25);};document.addEventListener("keydown",key);
 $("brickLeft").onclick=()=>paddle=Math.max(0,paddle-25);$("brickRight").onclick=()=>paddle=Math.min(340,paddle+25);$("brickStart").onclick=start;c.addEventListener("pointermove",e=>{const r=c.getBoundingClientRect();paddle=Math.max(0,Math.min(340,(e.clientX-r.left)*420/r.width-40));});reset();cleanup=()=>{run=false;cancelAnimationFrame(raf);document.removeEventListener("keydown",key);};
}
function mines(){
 let bombs=new Set(),open=new Set(),flags=new Set(),over=false;const n=9,total=10;function init(){bombs.clear();open.clear();flags.clear();over=false;while(bombs.size<total)bombs.add(Math.floor(Math.random()*81));}
 panel(toolbar('বোমা: <b>১০</b> · পতাকা: <b id="flagCount">0</b>')+'<div id="mineBoard" class="game-board mines-board"></div><p id="gameMessage" class="game-message">একটি ঘর খুলুন। ডান-ক্লিক বা দীর্ঘ চাপ দিয়ে পতাকা দিন।</p><div class="game-toolbar"><button id="mineReset" class="game-action">নতুন বোর্ড</button></div>');
 const b=$("mineBoard");function around(i){let r=Math.floor(i/9),c=i%9,count=0;for(let y=-1;y<=1;y++)for(let x=-1;x<=1;x++){let yy=r+y,xx=c+x;if(yy>=0&&yy<9&&xx>=0&&xx<9&&bombs.has(yy*9+xx))count++;}return count;}
 function reveal(i){if(over||open.has(i)||flags.has(i))return;open.add(i);if(bombs.has(i)){over=true;msg("বোমা! আবার চেষ্টা করুন।");draw();return;}if(around(i)===0){let r=Math.floor(i/9),c=i%9;for(let y=-1;y<=1;y++)for(let x=-1;x<=1;x++){let yy=r+y,xx=c+x;if(yy>=0&&yy<9&&xx>=0&&xx<9)reveal(yy*9+xx);}}if(open.size===71){over=true;msg("অভিনন্দন! সব নিরাপদ ঘর খুলেছেন।");}draw();}
 function flag(i){if(over||open.has(i))return;if(flags.has(i))flags.delete(i);else if(flags.size<10)flags.add(i);$("flagCount").textContent=flags.size;draw();}
 function draw(){b.innerHTML="";for(let i=0;i<81;i++){let z=document.createElement("button");z.className=open.has(i)?"open":"";z.textContent=open.has(i)?(bombs.has(i)?"💣":(around(i)||"")):(flags.has(i)?"🚩":"");z.disabled=open.has(i)||over;z.onclick=()=>reveal(i);z.oncontextmenu=e=>{e.preventDefault();flag(i);};let timer;z.ontouchstart=()=>timer=setTimeout(()=>flag(i),450);z.ontouchend=()=>clearTimeout(timer);b.append(z);}}
 $("mineReset").onclick=()=>{init();$("flagCount").textContent=0;msg("নতুন বোর্ড তৈরি হয়েছে।");draw();};init();draw();
}
function sudoku(){
 const puzzle="530070000600195000098000060800060003400803001700020006060000280000419005000080079";
 const solution="534678912672195348198342567859761423426853791713924856961537284287419635345286179";
 let vals=puzzle.split("").map(Number);panel('<div class="game-toolbar">সুডোকু • সহজ স্তর</div><div id="sudokuBoard" class="game-board sudoku-board"></div><p id="gameMessage" class="game-message">খালি ঘরে ১–৯ লিখুন, তারপর যাচাই করুন।</p><div class="game-toolbar"><button id="sudokuCheck" class="game-action">উত্তর যাচাই</button><button id="sudokuHint" class="secondary-btn">একটি ইঙ্গিত</button><button id="sudokuReset" class="secondary-btn">রিসেট</button></div>');
 const b=$("sudokuBoard");function draw(){b.innerHTML="";vals.forEach((v,i)=>{let z=document.createElement("input");z.inputMode="numeric";z.maxLength=1;z.value=v||"";z.disabled=!!puzzle[i]&&puzzle[i]!=="0";z.setAttribute("aria-label","ঘর "+(i+1));z.oninput=()=>{let n=Number(z.value);vals[i]=n>=1&&n<=9?n:0;z.value=vals[i]||"";};b.append(z);});}
 $("sudokuCheck").onclick=()=>{let wrong=vals.some((v,i)=>v!==Number(solution[i]));msg(wrong?"এখনো কিছু ঘর ভুল বা খালি আছে।":"অভিনন্দন! সুডোকু সমাধান করেছেন।");};
 $("sudokuHint").onclick=()=>{let i=vals.findIndex((v,j)=>!puzzle[j]&&v!==Number(solution[j]));if(i<0){msg("সব ঘর ঠিক আছে!");return;}vals[i]=Number(solution[i]);draw();msg("একটি ঘরে সঠিক সংখ্যা বসানো হয়েছে।");};
 $("sudokuReset").onclick=()=>{vals=puzzle.split("").map(Number);draw();msg("শুরু অবস্থায় ফিরেছে।");};draw();
}
function flappy(){
 panel(toolbar('স্কোর: <b id="flyScore">0</b>')+'<canvas id="flyCanvas" class="flappy-board" width="360" height="500"></canvas><div class="game-toolbar"><button id="flyStart" class="game-action">শুরু / আবার</button><button id="flyJump" class="secondary-btn">উড়ুন ↑</button></div><p id="gameMessage" class="game-message">Tap, Space বা উড়ুন বোতাম চাপুন।</p>');
 const c=$("flyCanvas"),x=c.getContext("2d");let bird=220,vy=0,pipes=[],score=0,run=false,raf=0,last=0;
 function draw(){x.fillStyle="#b9e5ed";x.fillRect(0,0,360,500);x.fillStyle="#78b95c";pipes.forEach(p=>{x.fillRect(p.x,0,48,p.gap);x.fillRect(p.x,p.gap+125,48,500);});x.fillStyle="#f2c34e";x.beginPath();x.arc(90,bird,14,0,7);x.fill();x.fillStyle="#f18d36";x.fillRect(101,bird-3,12,7);}
 function jump(){if(!run)start();vy=-5.5;}
 function start(){cancelAnimationFrame(raf);bird=220;vy=0;pipes=[{x:360,gap:165,passed:false}];score=0;run=true;last=0;$("flyScore").textContent=0;msg("উড়তে থাকুন!");raf=requestAnimationFrame(loop);}
 function loop(t){if(!run)return;vy+=.24;bird+=vy;if(!pipes.length||pipes[pipes.length-1].x<190)pipes.push({x:360,gap:100+Math.random()*230,passed:false});pipes.forEach(p=>{p.x-=2.2;if(!p.passed&&p.x<90){p.passed=true;score++;$("flyScore").textContent=score;}});pipes=pipes.filter(p=>p.x>-55);const hit=pipes.some(p=>90+12>p.x&&90-12<p.x+48&&(bird-12<p.gap||bird+12>p.gap+125));if(bird<0||bird>500||hit){run=false;msg("খেলা শেষ! স্কোর "+score+" — আবার শুরু করুন।");draw();return;}draw();raf=requestAnimationFrame(loop);}
 const key=e=>{if(e.code==="Space"){e.preventDefault();jump();}};document.addEventListener("keydown",key);c.addEventListener("pointerdown",jump);$("flyStart").onclick=start;$("flyJump").onclick=jump;draw();cleanup=()=>{run=false;cancelAnimationFrame(raf);document.removeEventListener("keydown",key);};
}
function extraGame(id){
 const groups={
 chance:["rps","dice","coin"],quiz:["geoquiz","generalquiz"],math:["mathquiz","speedmath","quickcount","sequence","oddone"],
 words:["typing","scramble","anagram","hangman","wordsearch","crossword"],
 reflex:["reaction","clicker","whack","targetpractice","knifehit","bottleflip"],
 memory:["animalmemory","fruitmemory","emojimemory","planetmatch","simon","simon2","pattern"],
 puzzle:["lightsout","colorflood","minisokoban","pegsolitaire","nonogram","minesweeper2","fifteen"],
 board:["connect4","gomoku","reversi","hex","dotsboxes","nim","nimble","tictactoe3d","checkers"],
 cards:["higherlower","blackjack","warcards","solitaire","backgammon","domino"],
 sports:["basketball","penalty","golf","volleyball","tennis","bowling","pool","darts","soccerjuggle"],
 arcade:["pong","space","asteroid","runner","fruitcatch","bubble","stack","jump","fishing","archery","brick2","towerdefense","ski","bike","carparking","traffic","submarine","rocketlanding","stargazer","dinosaur","penguin","bee","gardening","cooking","treasure","maze"]
 };
 const type=Object.keys(groups).find(k=>groups[k].includes(id))||"arcade";
 let score=0,done=false,timer=null;
 const area=()=>$("extraArea"),say=t=>msg(t),heading=t=>$("extraPrompt").textContent=t;
 const set=n=>{score=n;$("extraScore").textContent=n;};
 panel(toolbar('স্কোর: <b id="extraScore">0</b> <span id="extraMeta"></span>')+'<h3 id="extraPrompt" style="text-align:center">গেম প্রস্তুত</h3><div id="extraArea" class="game-toolbar" style="min-height:190px;align-content:center;flex-wrap:wrap"></div><p id="gameMessage" class="game-message">নির্দেশনা অনুসরণ করে খেলুন।</p><div class="game-toolbar"><button id="extraStart" class="game-action">নতুন খেলা</button></div>');
 const add=(t,fn,css)=>{let b=btn(t,fn);if(css)Object.assign(b.style,css);area().append(b);return b;};
 function finish(t){done=true;clearInterval(timer);say(t+" | স্কোর: "+score);}
 function start(){clearInterval(timer);set(0);done=false;area().innerHTML="";area().style.display="";if(type==="chance")chance();else if(type==="quiz")quiz();else if(type==="math")math();else if(type==="words")words();else if(type==="reflex")reflex();else if(type==="memory")memory();else if(type==="puzzle")puzzle();else if(type==="board")board();else if(type==="cards")cards();else if(type==="sports")sports();else arcade();}
 $("extraStart").onclick=start;
 function chance(){
  if(id==="rps"){heading("পাথর, কাগজ, কাঁচি");["✊ পাথর","✋ কাগজ","✌️ কাঁচি"].forEach((v,i)=>add(v,()=>{let cpu=Math.floor(Math.random()*3),win=(i-cpu+3)%3;set(score+(win===1?1:win===0?0:0));say(["✊","✋","✌️"][cpu]+" কম্পিউটার · "+(win===0?"ড্র":win===1?"আপনি জিতেছেন!":"কম্পিউটার জিতেছে"));},{fontSize:"23px",padding:"15px"}));}
  else if(id==="dice"){heading("পাশা ঘোরান");add("🎲 পাশা নিক্ষেপ",()=>{let v=1+Math.floor(Math.random()*6);heading("🎲 "+v);set(score+v);say("আপনার পাশায় "+v+" উঠেছে!");},{fontSize:"25px",padding:"22px"});}
  else{heading("হেডস নাকি টেল?");["হেডস","টেল"].forEach(v=>add(v,()=>{let result=Math.random()<.5?"হেডস":"টেল";if(v===result)set(score+1);say("ফলাফল: "+result+(v===result?" — সঠিক!":" — আবার চেষ্টা করুন"));}));}
 }
 function quiz(){let qs=[["বাংলাদেশের রাজধানী?",["ঢাকা","খুলনা","রাজশাহী"],0],["জাতীয় ফুল?",["গোলাপ","শাপলা","জবা"],1],["জাতীয় মাছ?",["ইলিশ","রুই","কাতলা"],0],["জাতীয় স্মৃতিসৌধ কোথায়?",["সাভার","খুলনা","সিলেট"],0],["স্বাধীনতা দিবস?",["২৬ মার্চ","১৬ ডিসেম্বর","২১ ফেব্রুয়ারি"],0],["জাতীয় কবি?",["নজরুল","রবীন্দ্রনাথ","জসীমউদ্দীন"],0]];let i=0;function next(){if(i===qs.length)return finish("কুইজ শেষ");let q=qs[i++];heading(q[0]);area().innerHTML="";q[1].forEach((v,j)=>add(v,()=>{if(j===q[2])set(score+10);say(j===q[2]?"সঠিক উত্তর!":"সঠিক উত্তর: "+q[1][q[2]]);timer=setTimeout(next,600);}));}next();}
 function math(){let i=0;function next(){if(i++===10)return finish("অঙ্ক চ্যালেঞ্জ শেষ");let a=2+Math.floor(Math.random()*18),b=1+Math.floor(Math.random()*10),ans=a+b,q=id==="sequence"?a+", "+(a*2)+", ?":id==="quickcount"?"🍎 ".repeat(a%6+2)+" কয়টি?":a+" + "+b+" = ?";if(id==="sequence")ans=a*4;if(id==="quickcount")ans=a%6+2;if(id==="oddone"){q="কোনটি আলাদা: 2, 4, 6, 9, 8";ans=9;}heading(q);area().innerHTML="";[ans,ans+1,Math.max(1,ans-2),ans+4].sort(()=>Math.random()-.5).forEach(v=>add(v,()=>{if(v===ans)set(score+10);say(v===ans?"একদম ঠিক!":"আবার চেষ্টা করুন");timer=setTimeout(next,500);}));}next();}
 function words(){let list=id==="typing"?["BOLIYAPUR","COMMUNITY","BANGLADESH","FRIEND"]:["কমলালেবু","বাংলাদেশ","পাখি","বন্ধু","নদী"];let i=0;function next(){if(i>=list.length)return finish("শব্দ খেলা শেষ");let answer=list[i++],scrambled=answer.split("").sort(()=>Math.random()-.5).join("");heading(id==="typing"?"টাইপ করুন: "+answer:"অক্ষর সাজান: "+scrambled);area().innerHTML="";let input=document.createElement("input");input.placeholder="উত্তর লিখুন";input.style.cssText="padding:12px;border:1px solid #aaa;border-radius:10px";area().append(input);add("যাচাই",()=>{let ok=input.value.trim().toLowerCase()===answer.toLowerCase();if(ok)set(score+20);say(ok?"সঠিক!":"সঠিক উত্তর: "+answer);timer=setTimeout(next,700);});input.focus();}next();}
 function reflex(){heading("সবুজ হলে দ্রুত চাপ দিন");let b=add("অপেক্ষা করুন…",()=>{if(!b.dataset.ready){say("এখনো নয়!");return;}set(score+Math.max(1,Math.round(1000/(Date.now()-Number(b.dataset.at)))));b.dataset.ready="";b.style.background="#c65a4b";say("দ্রুত প্রতিক্রিয়া! আবার অপেক্ষা করুন।");timer=setTimeout(round,900);},{fontSize:"25px",padding:"24px"});let n=0;function round(){if(n++===5)return finish("রিঅ্যাকশন শেষ");b.dataset.ready="";b.textContent="অপেক্ষা করুন…";b.style.background="#c65a4b";timer=setTimeout(()=>{b.dataset.ready="1";b.dataset.at=Date.now();b.textContent="এখন চাপ দিন!";b.style.background="#15965e";},900+Math.random()*1800);}if(id==="clicker"){let left=15;b.textContent="দ্রুত চাপ দিন";b.onclick=()=>{if(!done)set(score+1);};timer=setInterval(()=>{left--;$("extraMeta").textContent="সময় "+left+"s";if(left<=0)finish("সময় শেষ");},1000);}else round();}
 function memory(){let symbols=id==="animalmemory"?["🐶","🐱","🐼","🦊","🐸","🐵"]:id==="fruitmemory"?["🍎","🍌","🍇","🍉","🍓","🥝"]:["😀","😎","🥳","😍","🤖","👻"];let deck=[...symbols,...symbols].sort(()=>Math.random()-.5),first=null,lock=false,matched=0;heading("একই ছবির জোড়া খুঁজুন");area().style.display="grid";area().style.gridTemplateColumns="repeat(4,60px)";deck.forEach(v=>{let b=add("❔",()=>{if(lock||b.dataset.open||done)return;b.textContent=v;b.dataset.open="1";if(first===null){first=b;return;}if(first.textContent===v){matched++;set(score+10);first=null;if(matched===symbols.length)finish("সব জোড়া মিলেছে!");}else{lock=true;let prev=first;timer=setTimeout(()=>{b.textContent=prev.textContent="❔";delete b.dataset.open;delete prev.dataset.open;first=null;lock=false;},650);}}, {fontSize:"24px",minWidth:"55px",minHeight:"55px"});});}
 function puzzle(){heading(id==="lightsout"?"সব আলো নিভিয়ে দিন":"সঠিক ঘর/সংখ্যা খুঁজুন");area().style.display="grid";area().style.gridTemplateColumns="repeat(5,48px)";if(id==="lightsout"){let a=Array.from({length:25},()=>Math.random()>.5);function draw(){area().innerHTML="";a.forEach((v,i)=>add(v?"💡":"⚫",()=>{[i,i-5,i+5,i-1,i+1].forEach(j=>{if(j>=0&&j<25&&Math.abs(j%5-i%5)<=1)a[j]=!a[j];});set(score+1);draw();if(a.every(x=>!x))finish("সব আলো নিভেছে!");},{minWidth:"44px",minHeight:"44px"}));}draw();}else{let nums=Array.from({length:25},(_,i)=>i+1).sort(()=>Math.random()-.5),next=1;nums.forEach(v=>add(v,()=>{if(v===next){set(score+1);next++;if(next===26)finish("পাজল সম্পন্ন!");}else say("পরের সংখ্যা "+next+" খুঁজুন");},{minWidth:"44px",minHeight:"44px"}));}}
 function board(){let n=id==="gomoku"?9:7,cells=Array(n*n).fill(0),turn=1;heading("দুইজন পালা করে গুটি বসান");area().style.display="grid";area().style.gridTemplateColumns="repeat("+n+", minmax(0,1fr))";function draw(){area().innerHTML="";cells.forEach((v,i)=>add(v===1?"🔴":v===2?"🔵":"·",()=>{if(v||done)return;cells[i]=turn;let r=Math.floor(i/n),c=i%n,win=[[1,0],[0,1],[1,1],[1,-1]].some(([dr,dc])=>{let k=1;for(let s of [-1,1]){let y=r+dr*s,x=c+dc*s;while(y>=0&&y<n&&x>=0&&x<n&&cells[y*n+x]===turn){k++;y+=dr*s;x+=dc*s;}}return k>=(id==="gomoku"?5:4);});if(win)return finish((turn===1?"লাল":"নীল")+" জিতেছে!");turn=3-turn;say(turn===1?"লালের চাল":"নীলের চাল");draw();},{minWidth:n===9?"28px":"38px",minHeight:n===9?"28px":"38px"}));}draw();}
 function cards(){let card=1+Math.floor(Math.random()*13),i=0,names=["A","2","3","4","5","6","7","8","9","10","J","Q","K"];function draw(){heading("কার্ড: "+names[card-1]);area().innerHTML="";if(id==="higherlower"){["বড়","ছোট"].forEach((v,j)=>add(v,()=>{let next=1+Math.floor(Math.random()*13),ok=j===0?next>card:next<card;if(ok)set(score+10);say(ok?"সঠিক!":"ভুল!");card=next;if(++i===8)finish("কার্ড রাউন্ড শেষ");else draw();}));}else{add("আরেকটি কার্ড",()=>{card+=1+Math.floor(Math.random()*10);heading("আপনার মোট: "+card);if(card>21)finish("২১ ছাড়িয়ে গেছেন");});add("থামুন",()=>finish("চূড়ান্ত স্কোর "+card));}}draw();}
 function sports(){let tries=0;heading("টার্গেটে বল/শট ফেলুন");let b=add("🏀",()=>{if(Math.random()>.3)set(score+10);say("শট "+(tries+1)+": "+(score>0?"পয়েন্ট!":"মিস"));if(++tries===8)finish("ম্যাচ শেষ");b.style.transform="translate("+((Math.random()-.5)*65)+"px,"+((Math.random()-.5)*35)+"px)";},{fontSize:"48px",padding:"25px"});}
 function arcade(){let p=12,rocks=[2,8,16,21];heading("নির্দেশিত পথে লক্ষ্যে পৌঁছান");area().style.display="grid";area().style.gridTemplateColumns="repeat(5,48px)";function draw(){area().innerHTML="";for(let i=0;i<25;i++)add(i===p?"🚀":rocks.includes(i)?"🪨":"▫️",()=>{p=i;set(score+1);if(rocks.includes(i))finish("বাধায় ধাক্কা!");else if(i===24)finish("লক্ষ্যে পৌঁছেছেন!");else draw();},{minWidth:"44px",minHeight:"44px"});}["⬅️","⬇️","➡️","⬆️"].forEach((v,j)=>add(v,()=>{p=Math.max(0,Math.min(24,p+[ -1,5,1,-5][j]));draw();}));draw();}
 start();cleanup=()=>{clearInterval(timer);area().style.display="";};
}
cardList();
})();