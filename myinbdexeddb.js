"use strict"


function wwjrand(max) {
    return Math.ceil(Math.random() * max);
}

// while(1){
//
//     var rrr = wwjrand(1002);
//     if(rrr === 1003){
//         console.log("find it!!!!!" + rrr);
//         break;
//     }
// }


function ngerand(n, max) {
    var result = [];
    for (let i = 0; i < n; i++) {
        result.push(wwjrand(max));
    }
    return result;
}


// (function() {
var ww = "pppromise";
var vv = "is inside";
var ppp = new Promise((resolve, reject) => {
    // console.log(ww);
    // console.log(vv);
    resolve()
    return "i'm from new Promise!!!!"
});


ppp.then((dtaa) => {
    // console.log(dtaa);
});


// navigator.storage.estimate().then(function (estimate) {
console.log("navigator.storage.estimate()");
// console.log(estimate.usage / estimate.quota);
//
// });


if (navigator.storage && navigator.storage.persist)
    navigator.storage.persist().then(function (persistent) {
        // console.log("navigator.storage.persist");
        if (persistent) {
            // console.log("Storage will not be cleared except by explicit user action");
        } else {
            // console.log("Storage may be cleared by the UA under storage pressure.");
        }
    });


var WWJDB = function (dbname, version) {
    this.dbname = dbname;
    this.dbversion = version;
    this.db = 777;
    this.openindexdbrequest = null;


    this.opendb0 = function () {
        // console.log(this.dbname, this.dbversion);

        var r = window.indexedDB.open(this.dbname, this.dbversion);
        this.openindexdbrequest = r;


        // console.log(openindexdbrequest);
        // resolve(r.onsuccess)

        return new Promise((resolve, reject) => {
            // console.log(r);
            r.onsuccess = resolve;

            // function (event) {
            // console.log("i'm in r.onsuccess");
            // this.db = event.target.result;
            // console.log(this.db)
            // return new Promise(function (resolve, reject) {
            //     resolve(this.db);
            // });
            // console.log("i'm out r.onsuccess");
            // };

            r.onerror = reject;
            // function (event) {
            // console.log("indexeddb open failed");
            // };

            r.onupgradeneeded = resolve

        });
    };


    this.opendb = function (theobj) {
        // console.log(this.opendb())
        // debugger;
        // self = this
        // self = theobj
        this.opendb0().then((event) => {
            // console.log(event);

            // debugger;
            // if (event.type === "success")
            // {
            // console.log(event);
            this.db = event.target.result;

            var t = 7;
            // console.log(this.db);
            //     this.db = data
            // });

            // }else if (event.type === "upgradeneeded"){
            //     console.log("in upgradeneeded branch")
            //
            // }
        });
    }
}


var jjdb = null;


function getObjectStore(store_name, mode = "readonly") {
    // debugger;
    var tx = jjdb.transaction(store_name, mode);
    return tx.objectStore(store_name);
}


function getAllkeysfromStore(store) {
    var r = store.getAllKeys();
    r.onerror = function (event) {
        // Handle errors!
        console.log("// Handle errors!")
    };
    r.onsuccess = function (event) {
        // Do something with the request.result!
        // console.log("Name for SSN 444-44-4444 is " + requestwwj.result);
        // console.log("event.target is " + event.target.result );
        console.log(event.target.result);
    };
}


function getentrybyPrimeKey(store, pk, sucb) {
    var requestwwj = store.get(pk);


    console.log(store.getAllKeys());
    // console.log(requestwwj)

    requestwwj.onerror = function (event) {
        // Handle errors!
        console.log("// Handle errors!")
    };
    requestwwj.onsuccess = function (event) {
        // Do something with the request.result!
        // console.log("Name for SSN 444-44-4444 is " + requestwwj.result);
        // console.log("event.target is " + event.target.result );
    };
}


// debugger;
const dbName = "wwjdb_name";
var request = indexedDB.open(dbName, 1);


request.onsuccess = function (event) {
    jjdb = event.target.result;
    // console.log("request.onsuccess");

    var transaction = jjdb.transaction(["wwjcustomers"]);
    var objectStore = transaction.objectStore("wwjcustomers");


    // var request = objectStore.get("444-44-4444");
    // console.log("var request",request)
    // request.onerror = function(event) {
    //     // Handle errors!
    // };
    // request.onsuccess = function(event) {
    //     // Do something with the request.result!
    //     console.log("Name for SSN 444-44-4444 is " + event.target.result.name);
    // };


    var requestwwj = objectStore.get(3);
    var fieldname = 'chinese'
    // console.log(requestwwj)
    requestwwj.onerror = function (event) {
        // Handle errors!
        console.log("// Handle errors!")
    };
    requestwwj.onsuccess = function (event) {
        // Do something with the request.result!
        // console.log(requestwwj.result);
        // console.log("event.target is " + event.target.result[fieldname]);
    };


    // First, make sure you created index in request.onupgradeneeded:
// objectStore.createIndex("name", "name");
// Otherwize you will get DOMException.

    var index = objectStore.index("indexc");
    // console.log(index)

    // index.get("indexc").onsuccess = function(event) {
    //     console.log("Donna's SSN is " + event.target.result.chinese);
    // };


    ///////////////////////////indx with cursor//////////////////////
    // Using a normal cursor to grab whole customer record objects
    index.openCursor().onsuccess = function (event) {
        var cursor = event.target.result;
        if (cursor) {
            // cursor.key is a name, like "Bill", and cursor.value is the whole object.
            // console.log("Name: " + cursor.key + ", SSN: " + cursor.value.ssn + ", email: " + cursor.value.email);
            // console.log(cursor)
            cursor.continue();
        }
    };

// Using a key cursor to grab customer record object keys
//     index.openKeyCursor().onsuccess = function(event) {
//         var cursor = event.target.result;
//         if (cursor) {
//             // cursor.key is a name, like "Bill", and cursor.value is the SSN.
//             // No way to directly get the rest of the stored object.
//             console.log("Name: " + cursor.key + ", SSN: " + cursor.primaryKey);
//             cursor.continue();
//         }
//     };


};


request.onerror = function (event) {
    console.log("indexeddb open failed");
    console.log(event.target);
};


request.onupgradeneeded = function (event) {

    console.log("enter onupgradeneeded callback!!")

    var jjdb = event.currentTarget.result;

    // Create an objectStore to hold information about our customers. We're
    // going to use "ssn" as our key path because it's guaranteed to be
    // unique - or at least that's what I was told during the kickoff meeting.
//  var objectStore = db.createObjectStore("wwjcustomers", { keyPath: "ssn" });
    var objectStore = jjdb.createObjectStore("wwjcustomers", {keyPath: "id"});

    // Create an index to search customers by name. We may have duplicates
    // so we can't use a unique index.
//  objectStore.createIndex("index0", "chinese", { unique: false }  );  //wrong pathkeyname doesnt abort the create of database
//  objectStore.createIndex("index0", "name", { unique: false }  );  //wrong pathkeyname doesnt abort the create of database

    // Create an index to search customers by email. We want to ensure that
    // no two customers have the same email, so use a unique index.
//  objectStore.createIndex("index1", "pinyin", { unique: false });
//  objectStore.createIndex("index1", "email", { unique: false });

    objectStore.createIndex("hanzi", "chinese", {unique: false});
    objectStore.createIndex("indexa", "a", {unique: false});
    objectStore.createIndex("indexb", "b", {unique: false});
    objectStore.createIndex("indexc", "c", {unique: false});
    objectStore.createIndex("indexd", "d", {unique: false});
    objectStore.createIndex("indexe", "e", {unique: false});
    objectStore.createIndex("indexf", "f", {unique: false});
    objectStore.createIndex("indexg", "g", {unique: false});
    objectStore.createIndex("indexh", "h", {unique: false});
    objectStore.createIndex("indexi", "i", {unique: false});
    objectStore.createIndex("indexj", "j", {unique: false});
    objectStore.createIndex("indexk", "k", {unique: false});
    objectStore.createIndex("indexl", "l", {unique: false});
    objectStore.createIndex("indexm", "m", {unique: false});
    objectStore.createIndex("indexn", "n", {unique: false});
    objectStore.createIndex("indexo", "o", {unique: false});
    objectStore.createIndex("indexp", "p", {unique: false});
    objectStore.createIndex("indexq", "q", {unique: false});
    objectStore.createIndex("indexr", "r", {unique: false});
    objectStore.createIndex("indexs", "s", {unique: false});
    objectStore.createIndex("indext", "t", {unique: false});
    objectStore.createIndex("indexu", "u", {unique: false});
    objectStore.createIndex("indexv", "v", {unique: false});
    objectStore.createIndex("indexw", "w", {unique: false});
    objectStore.createIndex("indexx", "x", {unique: false});
    objectStore.createIndex("indexy", "y", {unique: false});
    objectStore.createIndex("indexz", "z", {unique: false});


    // Use transaction oncomplete to make sure the objectStore creation is
    // finished before adding data into it.
    objectStore.transaction.oncomplete = function (event) {
        // Store values in the newly created objectStore.

        // var customerObjectStore = db.transaction("wwjcustomers", "readwrite").objectStore("wwjcustomers");
        //
        // testData0.forEach(function(customer) {
        //     customerObjectStore.add(customer);
        // });


        var transaction = jjdb.transaction(["wwjcustomers"], "readwrite");
        // Note: Older experimental implementations use the deprecated constant IDBTransaction.READ_WRITE instead of "readwrite".
        // In case you want to support such an implementation, you can write:
        // var transaction = db.transaction(["customers"], IDBTransaction.READ_WRITE);


        // Do something when all the data is added to the database.
        transaction.oncomplete = function (event) {
            console.log("transaction.oncomplete All done!");
        };

        transaction.onerror = function (event) {
            console.log("Don't forget to handle errors!!!!");
        };

        var objectStore = transaction.objectStore("wwjcustomers");

        testData0.forEach(function (customer) {
            var request = objectStore.add(customer);
            request.onsuccess = function (event) {
                // event.target.result === customer.ssn;
                // console.log("request.onsuccess",event.target.result )
            };
        });


    };


    objectStore.transaction.onabort = function (event) {                       //does not execute
        console.log("transaction ABORT cb")                 //does not execute
        console.log("event")                 //does not execute
    };                 //does not execute
    //does not execute
    objectStore.transaction.onerror = function (event) {                 //does not execute
        console.log("transaction ERROR cb")                 //does not execute
        console.log("event")                 //does not execute
    };                 //does not execute

    console.log("exit onupgradeneeded callback!!");
};


//////////////////////////////////////////////////////////data zone/////////////////////////////////////////////////////////
//{
//	"AAA" : {
//	"chinese" : "回家",
//	"pinyin" : "hj"
//	},
//	"BBB" : {
//	"chinese" : "偶已经",
//	"pinyin" : "oyj"
//	}
//}
// document.write("<script type='text/javascript' src'data.js'></script>");
// This is what our customer data looks like.
const customerData = [
    {ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com"},
    {ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org"},
    {ssn: "555-55-5554", name: "Donna", age: 31, email: "wwj@home.org"}
];


const testData00 =
    [
        {
            "id": 0,
            "chinese": "回家",
            "pinyin": "hj"
        },
        {
            "id": 1,
            "chinese": "偶已经",
            "pinyin": "oyj"
        }
    ];

const testData0 =
    [
        {
            "id": 0,
            "chinese": "回家",
            "pinyin": "hj",
            "length": 2,
            "h": [0],
            "j": [1],
        },
        {
            "id": 1,
            "chinese": "偶已经",
            "pinyin": "oyj",
            "length": 3,
            "j": [2],
            "o": [0],
            "y": [1],
        },

        {
            "id": 2,
            "chinese": "吃吃吃",
            "pinyin": "ccc",
            "length": 3,
            "c": [0, 1, 2],
        },
        {
            "id": 3,
            "chinese": "陈",
            "pinyin": "c",
            "length": 1,
            "c": [0]
        },
        {
            "id": 4,
            "chinese": "冲突和交通",
            "pinyin": "cthjt",
            "length": 5,
            "c": [0],
            "t": [1, 4],
            "h": [2],
            "j": [3]
        }
    ];


const testDemoData =
    [{
        "a": [10],
        "c": [8],
        "chinese": "淫逛舆爽桔陨榨怪窗拍阿",
        "g": [1, 7],
        "id": 0,
        "j": [4],
        "length": 11,
        "p": [9],
        "pinyin": "ygysjyzgcpa",
        "s": [3],
        "y": [0, 2, 5],
        "z": [6]
    }, {
        "c": [2],
        "chinese": "谋猩测液",
        "id": 1,
        "length": 4,
        "m": [0],
        "pinyin": "mxcy",
        "x": [1],
        "y": [3]
    }, {
        "c": [0, 1],
        "chinese": "畴瓷凡滩睹",
        "d": [4],
        "f": [2],
        "id": 2,
        "length": 5,
        "pinyin": "ccftd",
        "t": [3]
    }, {
        "b": [2],
        "chinese": "账舒陛榔疗诞呻旨指燎假",
        "d": [5],
        "id": 3,
        "j": [10],
        "l": [3, 4, 9],
        "length": 11,
        "pinyin": "zsblldszzlj",
        "s": [1, 6],
        "z": [0, 7, 8]
    }, {
        "chinese": "鹅嵌滓氖翘戴谩儡鳃恢霍",
        "d": [5],
        "e": [0],
        "h": [9, 10],
        "id": 4,
        "l": [7],
        "length": 11,
        "m": [6],
        "n": [3],
        "pinyin": "eqznqdmlshh",
        "q": [1, 4],
        "s": [8],
        "z": [2]
    }, {
        "a": [9],
        "chinese": "弘琐视垒傣翌修详根阿",
        "d": [4],
        "g": [8],
        "h": [0],
        "id": 5,
        "l": [3],
        "length": 10,
        "pinyin": "hssldyxxga",
        "s": [1, 2],
        "x": [6, 7],
        "y": [5]
    }, {
        "b": [8],
        "chinese": "眯题溪审涪剐虱峰绑",
        "f": [4, 7],
        "g": [5],
        "id": 6,
        "length": 9,
        "m": [0],
        "pinyin": "mtxsfgsfb",
        "s": [3, 6],
        "t": [1],
        "x": [2]
    }, {
        "b": [2],
        "chinese": "俞瘤饱喳",
        "id": 7,
        "l": [1],
        "length": 4,
        "pinyin": "ylbz",
        "y": [0],
        "z": [3]
    }, {
        "chinese": "框巫碳岗麻",
        "g": [3],
        "id": 8,
        "k": [0],
        "length": 5,
        "m": [4],
        "pinyin": "kwtgm",
        "t": [2],
        "w": [1]
    }, {
        "b": [2, 4],
        "chinese": "谰醒帛疡彪僳慌",
        "h": [6],
        "id": 9,
        "l": [0],
        "length": 7,
        "pinyin": "lxbybsh",
        "s": [5],
        "x": [1],
        "y": [3]
    }, {
        "c": [4],
        "chinese": "奶竖志品称",
        "id": 10,
        "length": 5,
        "n": [0],
        "p": [3],
        "pinyin": "nszpc",
        "s": [1],
        "z": [2]
    }, {
        "c": [7],
        "chinese": "疟矩啼酞论李金初江帽盛",
        "id": 11,
        "j": [1, 6, 8],
        "l": [4, 5],
        "length": 11,
        "m": [9],
        "n": [0],
        "pinyin": "njttlljcjms",
        "s": [10],
        "t": [2, 3]
    }, {
        "chinese": "雾坡若帆苟扰",
        "f": [3],
        "g": [4],
        "id": 12,
        "length": 6,
        "p": [1],
        "pinyin": "wprfgr",
        "r": [2, 5],
        "w": [0]
    }, {
        "chinese": "慕凭喊砸",
        "h": [2],
        "id": 13,
        "length": 4,
        "m": [0],
        "p": [1],
        "pinyin": "mphz",
        "z": [3]
    }, {
        "chinese": "伟宦威鸥庆妊姐衙寅惠",
        "h": [1, 9],
        "id": 14,
        "j": [6],
        "length": 10,
        "o": [3],
        "pinyin": "whwoqrjyyh",
        "q": [4],
        "r": [5],
        "w": [0, 2],
        "y": [7, 8]
    }, {
        "c": [0],
        "chinese": "炊时铅萍兜吞迄顽蓄",
        "d": [4],
        "id": 15,
        "length": 9,
        "p": [3],
        "pinyin": "csqpdtqwx",
        "q": [2, 6],
        "s": [1],
        "t": [5],
        "w": [7],
        "x": [8]
    }, {
        "b": [4, 7],
        "chinese": "寨摘胆伦闭弓法波带杨玄",
        "d": [2, 8],
        "f": [6],
        "g": [5],
        "id": 16,
        "l": [3],
        "length": 11,
        "pinyin": "zzdlbgfbdyx",
        "x": [10],
        "y": [9],
        "z": [0, 1]
    }, {
        "chinese": "芹怨犊雕明洱门楼壶疼胜",
        "d": [2, 3],
        "e": [5],
        "h": [8],
        "id": 17,
        "l": [7],
        "length": 11,
        "m": [4, 6],
        "pinyin": "qyddmemlhts",
        "q": [0],
        "s": [10],
        "t": [9],
        "y": [1]
    }, {
        "chinese": "莹壬陨淀宁甲",
        "d": [3],
        "id": 18,
        "j": [5],
        "length": 6,
        "n": [4],
        "pinyin": "yrydnj",
        "r": [1],
        "y": [0, 2]
    }, {
        "b": [3],
        "chinese": "庙酮鲸哺琐鸯喊五",
        "h": [6],
        "id": 19,
        "j": [2],
        "length": 8,
        "m": [0],
        "pinyin": "mtjbsyhw",
        "s": [4],
        "t": [1],
        "w": [7],
        "y": [5]
    }, {
        "c": [2, 6],
        "chinese": "洒近厨滑箕椅惭娥",
        "e": [7],
        "h": [3],
        "id": 20,
        "j": [1, 4],
        "length": 8,
        "pinyin": "sjchjyce",
        "s": [0],
        "y": [5]
    }, {
        "chinese": "碰吁墟生",
        "id": 21,
        "length": 4,
        "p": [0],
        "pinyin": "pxxs",
        "s": [3],
        "x": [1, 2]
    }, {
        "chinese": "柜意铆网",
        "g": [0],
        "id": 22,
        "length": 4,
        "m": [2],
        "pinyin": "gymw",
        "w": [3],
        "y": [1]
    }, {
        "chinese": "姥裔收丫刽父",
        "f": [5],
        "g": [4],
        "id": 23,
        "l": [0],
        "length": 6,
        "pinyin": "lysygf",
        "s": [2],
        "y": [1, 3]
    }, {
        "b": [9],
        "chinese": "郁萌厢库诅峭单讣商玻",
        "d": [6],
        "f": [7],
        "id": 24,
        "k": [3],
        "length": 10,
        "m": [1],
        "pinyin": "ymxkzqdfsb",
        "q": [5],
        "s": [8],
        "x": [2],
        "y": [0],
        "z": [4]
    }, {
        "chinese": "吐铭荧麦署傈值退鞠",
        "id": 25,
        "j": [8],
        "l": [5],
        "length": 9,
        "m": [1, 3],
        "pinyin": "tmymslztj",
        "s": [4],
        "t": [0, 7],
        "y": [2],
        "z": [6]
    }, {
        "b": [5],
        "c": [1],
        "chinese": "为炒杰膛幅逼搂势其根",
        "f": [4],
        "g": [9],
        "id": 26,
        "j": [2],
        "l": [6],
        "length": 10,
        "pinyin": "wcjtfblsqg",
        "q": [8],
        "s": [7],
        "t": [3],
        "w": [0]
    }, {
        "chinese": "指叫也饿拱",
        "e": [3],
        "g": [4],
        "id": 27,
        "j": [1],
        "length": 5,
        "pinyin": "zjyeg",
        "y": [2],
        "z": [0]
    }, {
        "chinese": "冶告拢亥",
        "g": [1],
        "h": [3],
        "id": 28,
        "l": [2],
        "length": 4,
        "pinyin": "yglh",
        "y": [0]
    }, {
        "chinese": "涨枷位捏",
        "id": 29,
        "j": [1],
        "length": 4,
        "n": [3],
        "pinyin": "zjwn",
        "w": [2],
        "z": [0]
    }, {
        "c": [3, 4],
        "chinese": "钠擅芯馋藏罩懂",
        "d": [6],
        "id": 30,
        "length": 7,
        "n": [0],
        "pinyin": "nsxcczd",
        "s": [1],
        "x": [2],
        "z": [5]
    }, {
        "chinese": "裕显馈盏顾",
        "g": [4],
        "id": 31,
        "k": [2],
        "length": 5,
        "pinyin": "yxkzg",
        "x": [1],
        "y": [0],
        "z": [3]
    }, {
        "c": [1],
        "chinese": "谴除峭啡识",
        "f": [3],
        "id": 32,
        "length": 5,
        "pinyin": "qcqfs",
        "q": [0, 2],
        "s": [4]
    }, {
        "c": [1],
        "chinese": "例材拄况袁惜",
        "id": 33,
        "k": [3],
        "l": [0],
        "length": 6,
        "pinyin": "lczkyx",
        "x": [5],
        "y": [4],
        "z": [2]
    }, {
        "c": [2],
        "chinese": "巳厢撑洱经吠耀",
        "e": [3],
        "f": [5],
        "id": 34,
        "j": [4],
        "length": 7,
        "pinyin": "sxcejfy",
        "s": [0],
        "x": [1],
        "y": [6]
    }, {
        "chinese": "他舷挂潭却洱荔肘烁",
        "e": [5],
        "g": [2],
        "id": 35,
        "l": [6],
        "length": 9,
        "pinyin": "txgtqelzs",
        "q": [4],
        "s": [8],
        "t": [0, 3],
        "x": [1],
        "z": [7]
    }, {
        "c": [3],
        "chinese": "榔吊逐垂轿训棍蹲垃鸿",
        "d": [1, 7],
        "g": [6],
        "h": [9],
        "id": 36,
        "j": [4],
        "l": [0, 8],
        "length": 10,
        "pinyin": "ldzcjxgdlh",
        "x": [5],
        "z": [2]
    }, {
        "c": [1],
        "chinese": "祖插基杉鸯西隆宋叔杂弧",
        "h": [10],
        "id": 37,
        "j": [2],
        "l": [6],
        "length": 11,
        "pinyin": "zcjsyxlsszh",
        "s": [3, 7, 8],
        "x": [5],
        "y": [4],
        "z": [0, 9]
    }, {
        "b": [2],
        "chinese": "坛减埠野蒂鄂纳岩",
        "d": [4],
        "e": [5],
        "id": 38,
        "j": [1],
        "length": 8,
        "n": [6],
        "pinyin": "tjbydeny",
        "t": [0],
        "y": [3, 7]
    }, {
        "c": [6],
        "chinese": "扔讣恳旦狭对尘漱噪言乍",
        "d": [3, 5],
        "f": [1],
        "id": 39,
        "k": [2],
        "length": 11,
        "pinyin": "rfkdxdcszyz",
        "r": [0],
        "s": [7],
        "x": [4],
        "y": [9],
        "z": [8, 10]
    }, {
        "b": [1, 4],
        "c": [5],
        "chinese": "趴痹隙蚁膘雏欺",
        "id": 40,
        "length": 7,
        "p": [0],
        "pinyin": "pbxybcq",
        "q": [6],
        "x": [2],
        "y": [3]
    }, {
        "b": [0],
        "chinese": "北顽险爽揉稚廊",
        "id": 41,
        "l": [6],
        "length": 7,
        "pinyin": "bwxsrzl",
        "r": [4],
        "s": [3],
        "w": [1],
        "x": [2],
        "z": [5]
    }, {
        "c": [0],
        "chinese": "篡些掌方呆先",
        "d": [4],
        "f": [3],
        "id": 42,
        "length": 6,
        "pinyin": "cxzfdx",
        "x": [1, 5],
        "z": [2]
    }, {
        "chinese": "呕菱凯雇寡",
        "g": [3, 4],
        "id": 43,
        "k": [2],
        "l": [1],
        "length": 5,
        "o": [0],
        "pinyin": "olkgg"
    }, {
        "c": [6],
        "chinese": "棠凉想玩培取衬呐裕",
        "id": 44,
        "l": [1],
        "length": 9,
        "n": [7],
        "p": [4],
        "pinyin": "tlxwpqcny",
        "q": [5],
        "t": [0],
        "w": [3],
        "x": [2],
        "y": [8]
    }, {
        "b": [10],
        "chinese": "薛淖赡妓射绪奈峪钳账悲",
        "id": 45,
        "j": [3],
        "length": 11,
        "n": [1, 6],
        "pinyin": "xnsjsxnyqzb",
        "q": [8],
        "s": [2, 4],
        "x": [0, 5],
        "y": [7],
        "z": [9]
    }, {
        "b": [0],
        "chinese": "贝棺卒肋乖",
        "g": [1, 4],
        "id": 46,
        "l": [3],
        "length": 5,
        "pinyin": "bgzlg",
        "z": [2]
    }, {
        "chinese": "斋吠弃鞠",
        "f": [1],
        "id": 47,
        "j": [3],
        "length": 4,
        "pinyin": "zfqj",
        "q": [2],
        "z": [0]
    }, {
        "a": [0],
        "b": [3],
        "chinese": "埃沂遏坝休",
        "e": [2],
        "id": 48,
        "length": 5,
        "pinyin": "ayebx",
        "x": [4],
        "y": [1]
    }, {
        "c": [2],
        "chinese": "撩浙传坯禁",
        "id": 49,
        "j": [4],
        "l": [0],
        "length": 5,
        "p": [3],
        "pinyin": "lzcpj",
        "z": [1]
    }, {
        "c": [0],
        "chinese": "惩蛔糠趾",
        "h": [1],
        "id": 50,
        "k": [2],
        "length": 4,
        "pinyin": "chkz",
        "z": [3]
    }, {
        "b": [3],
        "c": [1, 5],
        "chinese": "刷粗郑邦轴仇缀润谱",
        "id": 51,
        "length": 9,
        "p": [8],
        "pinyin": "sczbzczrp",
        "r": [7],
        "s": [0],
        "z": [2, 4, 6]
    }, {
        "chinese": "披漳墟捆峻烷首",
        "id": 52,
        "j": [4],
        "k": [3],
        "length": 7,
        "p": [0],
        "pinyin": "pzxkjws",
        "s": [6],
        "w": [5],
        "x": [2],
        "z": [1]
    }, {
        "chinese": "荐掖肯利炎织钒渠浴桃茂",
        "f": [6],
        "id": 53,
        "j": [0],
        "k": [2],
        "l": [3],
        "length": 11,
        "m": [10],
        "pinyin": "jyklyzfqytm",
        "q": [7],
        "t": [9],
        "y": [1, 4, 8],
        "z": [5]
    }, {
        "b": [4],
        "chinese": "聋靖颈涯表怜电邻苛瘩浑",
        "d": [6, 9],
        "h": [10],
        "id": 54,
        "j": [1, 2],
        "k": [8],
        "l": [0, 5, 7],
        "length": 11,
        "pinyin": "ljjybldlkdh",
        "y": [3]
    }, {
        "c": [4],
        "chinese": "根控鬃能聪经",
        "g": [0],
        "id": 55,
        "j": [5],
        "k": [1],
        "length": 6,
        "n": [3],
        "pinyin": "gkzncj",
        "z": [2]
    }, {
        "b": [10],
        "chinese": "陆刘委离郭嗅剧攫胳眨臂",
        "g": [4, 8],
        "id": 56,
        "j": [6, 7],
        "l": [0, 1, 3],
        "length": 11,
        "pinyin": "llwlgxjjgzb",
        "w": [2],
        "x": [5],
        "z": [9]
    }, {
        "chinese": "注杜贤伪",
        "d": [1],
        "id": 57,
        "length": 4,
        "pinyin": "zdxw",
        "w": [3],
        "x": [2],
        "z": [0]
    }, {
        "c": [4],
        "chinese": "寿窖髓扔逞",
        "id": 58,
        "j": [1],
        "length": 5,
        "pinyin": "sjsrc",
        "r": [3],
        "s": [0, 2]
    }, {
        "b": [4],
        "chinese": "委娇倚嗓笔桔墟熔蹄",
        "id": 59,
        "j": [1, 5],
        "length": 9,
        "pinyin": "wjysbjxrt",
        "r": [7],
        "s": [3],
        "t": [8],
        "w": [0],
        "x": [6],
        "y": [2]
    }, {
        "c": [3],
        "chinese": "袋沤助承篆冉谷",
        "d": [0],
        "g": [6],
        "id": 60,
        "length": 7,
        "o": [1],
        "pinyin": "dozczrg",
        "r": [5],
        "z": [2, 4]
    }, {
        "chinese": "大仰玫逾份骇植",
        "d": [0],
        "f": [4],
        "h": [5],
        "id": 61,
        "length": 7,
        "m": [2],
        "pinyin": "dymyfhz",
        "y": [1, 3],
        "z": [6]
    }, {
        "b": [3],
        "c": [0],
        "chinese": "痴低善班闹",
        "d": [1],
        "id": 62,
        "length": 5,
        "n": [4],
        "pinyin": "cdsbn",
        "s": [2]
    }, {
        "b": [1],
        "c": [6],
        "chinese": "杉捌鸦森票往仓少屈",
        "id": 63,
        "length": 9,
        "p": [4],
        "pinyin": "sbyspwcsq",
        "q": [8],
        "s": [0, 3, 7],
        "w": [5],
        "y": [2]
    }, {
        "chinese": "郎戌梦罐",
        "g": [3],
        "id": 64,
        "l": [0],
        "length": 4,
        "m": [2],
        "pinyin": "lxmg",
        "x": [1]
    }, {
        "chinese": "痕证牛忿",
        "f": [3],
        "h": [0],
        "id": 65,
        "length": 4,
        "n": [2],
        "pinyin": "hznf",
        "z": [1]
    }, {
        "chinese": "理雅蒙岭跨",
        "id": 66,
        "k": [4],
        "l": [0, 3],
        "length": 5,
        "m": [2],
        "pinyin": "lymlk",
        "y": [1]
    }, {
        "chinese": "碌靴俗提犯曼倚绦",
        "f": [4],
        "id": 67,
        "l": [0],
        "length": 8,
        "m": [5],
        "pinyin": "lxstfmyt",
        "s": [2],
        "t": [3, 7],
        "x": [1],
        "y": [6]
    }, {
        "c": [0],
        "chinese": "程棺敲鸦探叶鞘耗蔷烤盗",
        "d": [10],
        "g": [1],
        "h": [7],
        "id": 68,
        "k": [9],
        "length": 11,
        "pinyin": "cgqytyqhqkd",
        "q": [2, 6, 8],
        "t": [4],
        "y": [3, 5]
    }, {
        "b": [7],
        "c": [6],
        "chinese": "斜京浙雨笛沈馋滨孺",
        "d": [4],
        "id": 69,
        "j": [1],
        "length": 9,
        "pinyin": "xjzydscbr",
        "r": [8],
        "s": [5],
        "x": [0],
        "y": [3],
        "z": [2]
    }, {
        "c": [7],
        "chinese": "中青缸前减离填操",
        "g": [2],
        "id": 70,
        "j": [4],
        "l": [5],
        "length": 8,
        "pinyin": "zqgqjltc",
        "q": [1, 3],
        "t": [6],
        "z": [0]
    }, {
        "chinese": "稳绚柜赖萄牲盅琢征",
        "g": [2],
        "id": 71,
        "l": [3],
        "length": 9,
        "pinyin": "wxgltszzz",
        "s": [5],
        "t": [4],
        "w": [0],
        "x": [1],
        "z": [6, 7, 8]
    }, {
        "b": [8],
        "c": [5],
        "chinese": "侍幂缄凭梢酬皱毯伯菇滋",
        "g": [9],
        "id": 72,
        "j": [2],
        "length": 11,
        "m": [1],
        "p": [3],
        "pinyin": "smjpscztbgz",
        "s": [0, 4],
        "t": [7],
        "z": [6, 10]
    }, {
        "b": [5],
        "c": [3],
        "chinese": "缩溪卫曾洼蔽腊",
        "id": 73,
        "l": [6],
        "length": 7,
        "pinyin": "sxwcwbl",
        "s": [0],
        "w": [2, 4],
        "x": [1]
    }, {
        "chinese": "制国蜒缕领斯孵",
        "f": [6],
        "g": [1],
        "id": 74,
        "l": [3, 4],
        "length": 7,
        "pinyin": "zgyllsf",
        "s": [5],
        "y": [2],
        "z": [0]
    }, {
        "chinese": "岗犊肤湾纺腿缕地",
        "d": [1, 7],
        "f": [2, 4],
        "g": [0],
        "id": 75,
        "l": [6],
        "length": 8,
        "pinyin": "gdfwftld",
        "t": [5],
        "w": [3]
    }, {
        "c": [0, 1],
        "chinese": "雏丑手攒",
        "id": 76,
        "length": 4,
        "pinyin": "ccsz",
        "s": [2],
        "z": [3]
    }, {
        "chinese": "渔骤娥泛墒现焕熏脓废蒸",
        "e": [2],
        "f": [3, 9],
        "h": [6],
        "id": 77,
        "length": 11,
        "n": [8],
        "pinyin": "yzefsxhxnfz",
        "s": [4],
        "x": [5, 7],
        "y": [0],
        "z": [1, 10]
    }, {
        "chinese": "哲拘总误扑外嗡泉示皱",
        "id": 78,
        "j": [1],
        "length": 10,
        "p": [4],
        "pinyin": "zjzwpwwqsz",
        "q": [7],
        "s": [8],
        "w": [3, 5, 6],
        "z": [0, 2, 9]
    }, {
        "b": [1, 2],
        "c": [4],
        "chinese": "宴鄙被妊础尉律评",
        "id": 79,
        "l": [6],
        "length": 8,
        "p": [7],
        "pinyin": "ybbrcwlp",
        "r": [3],
        "w": [5],
        "y": [0]
    }, {
        "b": [3],
        "c": [1],
        "chinese": "憾词椰鲍多啪宛汹叮禾",
        "d": [4, 8],
        "h": [0, 9],
        "id": 80,
        "length": 10,
        "p": [5],
        "pinyin": "hcybdpwxdh",
        "w": [6],
        "x": [7],
        "y": [2]
    }, {
        "b": [4, 5],
        "chinese": "惶践兑诅贝菠拘迫睛",
        "d": [2],
        "h": [0],
        "id": 81,
        "j": [1, 6, 8],
        "length": 9,
        "p": [7],
        "pinyin": "hjdzbbjpj",
        "z": [3]
    }, {
        "b": [1],
        "chinese": "泳绷鸳驴迎祸苇",
        "h": [5],
        "id": 82,
        "l": [3],
        "length": 7,
        "pinyin": "ybylyhw",
        "w": [6],
        "y": [0, 2, 4]
    }, {
        "b": [3],
        "chinese": "们纂借比",
        "id": 83,
        "j": [2],
        "length": 4,
        "m": [0],
        "pinyin": "mzjb",
        "z": [1]
    }, {
        "b": [2],
        "c": [10],
        "chinese": "质登爸甜涸泅涩俘妹现厨",
        "d": [1],
        "f": [7],
        "h": [4],
        "id": 84,
        "length": 11,
        "m": [8],
        "pinyin": "zdbthqsfmxc",
        "q": [5],
        "s": [6],
        "t": [3],
        "x": [9],
        "z": [0]
    }, {
        "chinese": "朱敬类湃露孺",
        "id": 85,
        "j": [1],
        "l": [2, 4],
        "length": 6,
        "p": [3],
        "pinyin": "zjlplr",
        "r": [5],
        "z": [0]
    }, {
        "chinese": "套脂绒之锥净椰宰樊恳",
        "f": [8],
        "id": 86,
        "j": [5],
        "k": [9],
        "length": 10,
        "pinyin": "tzrzzjyzfk",
        "r": [2],
        "t": [0],
        "y": [6],
        "z": [1, 3, 4, 7]
    }, {
        "chinese": "润韦弦临熄货",
        "h": [5],
        "id": 87,
        "l": [3],
        "length": 6,
        "pinyin": "rwxlxh",
        "r": [0],
        "w": [1],
        "x": [2, 4]
    }, {
        "chinese": "址腕瘩吼",
        "d": [2],
        "h": [3],
        "id": 88,
        "length": 4,
        "pinyin": "zwdh",
        "w": [1],
        "z": [0]
    }, {
        "chinese": "鸥喇恋搁恳",
        "g": [3],
        "id": 89,
        "k": [4],
        "l": [1, 2],
        "length": 5,
        "o": [0],
        "pinyin": "ollgk"
    }, {
        "chinese": "氮鲤晶蛋吏耍",
        "d": [0, 3],
        "id": 90,
        "j": [2],
        "l": [1, 4],
        "length": 6,
        "pinyin": "dljdls",
        "s": [5]
    }, {
        "b": [0],
        "chinese": "柄悬师洞",
        "d": [3],
        "id": 91,
        "length": 4,
        "pinyin": "bxsd",
        "s": [2],
        "x": [1]
    }, {
        "chinese": "瓦拓蚊渴拟滤竭枉蛔",
        "h": [8],
        "id": 92,
        "j": [6],
        "k": [3],
        "l": [5],
        "length": 9,
        "n": [4],
        "pinyin": "wtwknljwh",
        "t": [1],
        "w": [0, 2, 7]
    }, {
        "c": [3],
        "chinese": "管悄苑戳冷肄笋慧",
        "g": [0],
        "h": [7],
        "id": 93,
        "l": [4],
        "length": 8,
        "pinyin": "gqyclysh",
        "q": [1],
        "s": [6],
        "y": [2, 5]
    }, {
        "b": [2],
        "chinese": "砒迭爸熊忠左",
        "d": [1],
        "id": 94,
        "length": 6,
        "p": [0],
        "pinyin": "pdbxzz",
        "x": [3],
        "z": [4, 5]
    }, {
        "chinese": "汗龋介赵",
        "h": [0],
        "id": 95,
        "j": [2],
        "length": 4,
        "pinyin": "hqjz",
        "q": [1],
        "z": [3]
    }, {
        "b": [1, 3],
        "c": [0, 4],
        "chinese": "蔡豹妥霸催炔",
        "g": [5],
        "id": 96,
        "length": 6,
        "pinyin": "cbtbcg",
        "t": [2]
    }, {
        "chinese": "积巨吉碾屑姿嚏满绽掸流",
        "d": [9],
        "id": 97,
        "j": [0, 1, 2],
        "l": [10],
        "length": 11,
        "m": [7],
        "n": [3],
        "pinyin": "jjjnxztmzdl",
        "t": [6],
        "x": [4],
        "z": [5, 8]
    }, {
        "chinese": "膜档丈侵蓟屑婉蔬烤政泰",
        "d": [1],
        "id": 98,
        "j": [4],
        "k": [8],
        "length": 11,
        "m": [0],
        "pinyin": "mdzqjxwskzt",
        "q": [3],
        "s": [7],
        "t": [10],
        "w": [6],
        "x": [5],
        "z": [2, 9]
    }, {
        "chinese": "谅镐范绩",
        "f": [2],
        "g": [1],
        "id": 99,
        "j": [3],
        "l": [0],
        "length": 4,
        "pinyin": "lgfj"
    }, {
        "chinese": "资苏钮渔祷鸿旧",
        "d": [4],
        "h": [5],
        "id": 100,
        "j": [6],
        "length": 7,
        "n": [2],
        "pinyin": "zsnydhj",
        "s": [1],
        "y": [3],
        "z": [0]
    }, {
        "chinese": "染颊港砾低韧确憎烬癣",
        "d": [4],
        "g": [2],
        "id": 101,
        "j": [1, 8],
        "l": [3],
        "length": 10,
        "pinyin": "rjgldrqzjx",
        "q": [6],
        "r": [0, 5],
        "x": [9],
        "z": [7]
    }, {
        "a": [3],
        "c": [2],
        "chinese": "掀开椎哎膛晃",
        "h": [5],
        "id": 102,
        "k": [1],
        "length": 6,
        "pinyin": "xkcath",
        "t": [4],
        "x": [0]
    }, {
        "b": [0],
        "chinese": "半曳祸肾入架绘揭岛",
        "d": [8],
        "h": [2, 6],
        "id": 103,
        "j": [5, 7],
        "length": 9,
        "pinyin": "byhsrjhjd",
        "r": [4],
        "s": [3],
        "y": [1]
    }, {
        "chinese": "张轻贼霖棚沿煽苑栖续衷",
        "id": 104,
        "l": [3],
        "length": 11,
        "p": [4],
        "pinyin": "zqzlpysyqxz",
        "q": [1, 8],
        "s": [6],
        "x": [9],
        "y": [5, 7],
        "z": [0, 2, 10]
    }, {
        "chinese": "屹蓝盈移",
        "id": 105,
        "l": [1],
        "length": 4,
        "pinyin": "ylyy",
        "y": [0, 2, 3]
    }, {
        "b": [0],
        "chinese": "闭裔匙记料疑缉隧拦",
        "id": 106,
        "j": [3, 6],
        "l": [4, 8],
        "length": 9,
        "pinyin": "bysjlyjsl",
        "s": [2, 7],
        "y": [1, 5]
    }, {
        "chinese": "刷载屁醒",
        "id": 107,
        "length": 4,
        "p": [2],
        "pinyin": "szpx",
        "s": [0],
        "x": [3],
        "z": [1]
    }, {
        "c": [3],
        "chinese": "宜蚁搜厂甚挑琴展反",
        "f": [8],
        "id": 108,
        "length": 9,
        "pinyin": "yyscstqzf",
        "q": [6],
        "s": [2, 4],
        "t": [5],
        "y": [0, 1],
        "z": [7]
    }, {
        "c": [3],
        "chinese": "藻襄摸措枷闺",
        "g": [5],
        "id": 109,
        "j": [4],
        "length": 6,
        "m": [2],
        "pinyin": "zxmcjg",
        "x": [1],
        "z": [0]
    }, {
        "b": [3, 10],
        "c": [8],
        "chinese": "梁锰艘瓣涨担闽堂愁循疤",
        "d": [5],
        "id": 110,
        "l": [0],
        "length": 11,
        "m": [1, 6],
        "pinyin": "lmsbzdmtcxb",
        "s": [2],
        "t": [7],
        "x": [9],
        "z": [4]
    }, {
        "b": [1],
        "c": [4],
        "chinese": "屉把胡后椿胚止",
        "h": [2, 3],
        "id": 111,
        "length": 7,
        "p": [5],
        "pinyin": "tbhhcpz",
        "t": [0],
        "z": [6]
    }, {
        "b": [2],
        "c": [4],
        "chinese": "棱井帮腻惭汾",
        "f": [5],
        "id": 112,
        "j": [1],
        "l": [0],
        "length": 6,
        "n": [3],
        "pinyin": "ljbncf"
    }, {
        "c": [1],
        "chinese": "母躇乃铅",
        "id": 113,
        "length": 4,
        "m": [0],
        "n": [2],
        "pinyin": "mcnq",
        "q": [3]
    }, {
        "a": [0],
        "chinese": "按荐询喳夫烘灵",
        "f": [4],
        "h": [5],
        "id": 114,
        "j": [1],
        "l": [6],
        "length": 7,
        "pinyin": "ajxzfhl",
        "x": [2],
        "z": [3]
    }, {
        "chinese": "炎扬喊歌鸵芍漏",
        "g": [3],
        "h": [2],
        "id": 115,
        "l": [6],
        "length": 7,
        "pinyin": "yyhgtsl",
        "s": [5],
        "t": [4],
        "y": [0, 1]
    }, {
        "chinese": "恰色真馆耳绩瞥",
        "e": [4],
        "g": [3],
        "id": 116,
        "j": [5],
        "length": 7,
        "p": [6],
        "pinyin": "qszgejp",
        "q": [0],
        "s": [1],
        "z": [2]
    }, {
        "b": [2],
        "c": [3],
        "chinese": "梳嘘耙材毋坎专赦郑惶舞",
        "h": [9],
        "id": 117,
        "k": [5],
        "length": 11,
        "pinyin": "sxbcwkzszhw",
        "s": [0, 7],
        "w": [4, 10],
        "x": [1],
        "z": [6, 8]
    }, {
        "c": [2],
        "chinese": "赢纺察色甘肩额",
        "e": [6],
        "f": [1],
        "g": [4],
        "id": 118,
        "j": [5],
        "length": 7,
        "pinyin": "yfcsgje",
        "s": [3],
        "y": [0]
    }, {
        "b": [0, 5],
        "c": [1],
        "chinese": "坝丛哭各钨钵丹宰",
        "d": [6],
        "g": [3],
        "id": 119,
        "k": [2],
        "length": 8,
        "pinyin": "bckgwbdz",
        "w": [4],
        "z": [7]
    }, {
        "b": [1, 7],
        "c": [8],
        "chinese": "纂暴渡杰蛀蹲苇玻扯糕",
        "d": [2, 5],
        "g": [9],
        "id": 120,
        "j": [3],
        "length": 10,
        "pinyin": "zbdjzdwbcg",
        "w": [6],
        "z": [0, 4]
    }, {
        "b": [7],
        "c": [6],
        "chinese": "囚骗捆谈删贪惩鳖",
        "id": 121,
        "k": [2],
        "length": 8,
        "p": [1],
        "pinyin": "qpktstcb",
        "q": [0],
        "s": [4],
        "t": [3, 5]
    }, {
        "b": [1, 5],
        "c": [3],
        "chinese": "没焙寂晨晒玻樟级贯",
        "g": [8],
        "id": 122,
        "j": [2, 7],
        "length": 9,
        "m": [0],
        "pinyin": "mbjcsbzjg",
        "s": [4],
        "z": [6]
    }, {
        "b": [2],
        "chinese": "隧屈怖爵赎龄",
        "id": 123,
        "j": [3],
        "l": [5],
        "length": 6,
        "pinyin": "sqbjsl",
        "q": [1],
        "s": [0, 4]
    }, {
        "c": [9],
        "chinese": "蔓臻妻诈豢罚帚冷挞彻篙",
        "f": [5],
        "g": [10],
        "h": [4],
        "id": 124,
        "l": [7],
        "length": 11,
        "m": [0],
        "pinyin": "mzqzhfzltcg",
        "q": [2],
        "t": [8],
        "z": [1, 3, 6]
    }, {
        "b": [6, 9],
        "c": [2],
        "chinese": "猿丢炊咆眉屋辩胜腰褒",
        "d": [1],
        "id": 125,
        "length": 10,
        "m": [4],
        "p": [3],
        "pinyin": "ydcpmwbsyb",
        "s": [7],
        "w": [5],
        "y": [0, 8]
    }, {
        "b": [8],
        "chinese": "纳晒螟余熊峡译裂毖躯",
        "id": 126,
        "l": [7],
        "length": 10,
        "m": [2],
        "n": [0],
        "pinyin": "nsmyxxylbq",
        "q": [9],
        "s": [1],
        "x": [4, 5],
        "y": [3, 6]
    }, {
        "b": [3],
        "c": [2],
        "chinese": "交侗逞帮优免逗",
        "d": [1, 6],
        "id": 127,
        "j": [0],
        "length": 7,
        "m": [5],
        "pinyin": "jdcbymd",
        "y": [4]
    }, {
        "chinese": "骸叠楷贸厦捆峡",
        "d": [1],
        "h": [0],
        "id": 128,
        "k": [2, 5],
        "length": 7,
        "m": [3],
        "pinyin": "hdkmskx",
        "s": [4],
        "x": [6]
    }, {
        "chinese": "第零缴氏是撰灼墒",
        "d": [0],
        "id": 129,
        "j": [2],
        "l": [1],
        "length": 8,
        "pinyin": "dljsszzs",
        "s": [3, 4, 7],
        "z": [5, 6]
    }, {
        "chinese": "忆晚正骨尽侄游勤呕红",
        "g": [3],
        "h": [9],
        "id": 130,
        "j": [4],
        "length": 10,
        "o": [8],
        "pinyin": "ywzgjzyqoh",
        "q": [7],
        "w": [1],
        "y": [0, 6],
        "z": [2, 5]
    }, {
        "chinese": "揽孟忌鞋撂",
        "id": 131,
        "j": [2],
        "l": [0, 4],
        "length": 5,
        "m": [1],
        "pinyin": "lmjxl",
        "x": [3]
    }, {
        "chinese": "寻涪糕屎照",
        "f": [1],
        "g": [2],
        "id": 132,
        "length": 5,
        "pinyin": "xfgsz",
        "s": [3],
        "x": [0],
        "z": [4]
    }, {
        "c": [6],
        "chinese": "械浇淋妙默鸡撑智疹扔",
        "id": 133,
        "j": [1, 5],
        "l": [2],
        "length": 10,
        "m": [3, 4],
        "pinyin": "xjlmmjczzr",
        "r": [9],
        "x": [0],
        "z": [7, 8]
    }, {
        "chinese": "享赴云务逗",
        "d": [4],
        "f": [1],
        "id": 134,
        "length": 5,
        "pinyin": "xfywd",
        "w": [3],
        "x": [0],
        "y": [2]
    }, {
        "b": [5],
        "c": [0, 1, 7],
        "chinese": "衬裁星仕酉玻肾蠢咯",
        "g": [8],
        "id": 135,
        "length": 9,
        "pinyin": "ccxsybscg",
        "s": [3, 6],
        "x": [2],
        "y": [4]
    }, {
        "c": [9],
        "chinese": "培友袁父枉顽订哮翼茨较",
        "d": [6],
        "f": [3],
        "id": 136,
        "j": [10],
        "length": 11,
        "p": [0],
        "pinyin": "pyyfwwdxycj",
        "w": [4, 5],
        "x": [7],
        "y": [1, 2, 8]
    }, {
        "c": [7],
        "chinese": "喊负枫辽软沂关揣跪兑沸",
        "d": [9],
        "f": [1, 2, 10],
        "g": [6, 8],
        "h": [0],
        "id": 137,
        "l": [3],
        "length": 11,
        "pinyin": "hfflrygcgdf",
        "r": [4],
        "y": [5]
    }, {
        "b": [2],
        "chinese": "犁豌靶饭咸句雀刹滋撕前",
        "f": [3],
        "id": 138,
        "j": [5],
        "l": [0],
        "length": 11,
        "pinyin": "lwbfxjqszsq",
        "q": [6, 10],
        "s": [7, 9],
        "w": [1],
        "x": [4],
        "z": [8]
    }, {
        "b": [2],
        "c": [0, 1],
        "chinese": "诧馋标菌雷",
        "id": 139,
        "j": [3],
        "l": [4],
        "length": 5,
        "pinyin": "ccbjl"
    }, {
        "a": [3],
        "chinese": "逐框杆暗动",
        "d": [4],
        "g": [2],
        "id": 140,
        "k": [1],
        "length": 5,
        "pinyin": "zkgad",
        "z": [0]
    }, {
        "chinese": "世障岿唯晚排",
        "id": 141,
        "k": [2],
        "length": 6,
        "p": [5],
        "pinyin": "szkwwp",
        "s": [0],
        "w": [3, 4],
        "z": [1]
    }, {
        "c": [2],
        "chinese": "在障篡五带干",
        "d": [4],
        "g": [5],
        "id": 142,
        "length": 6,
        "pinyin": "zzcwdg",
        "w": [3],
        "z": [0, 1]
    }, {
        "b": [0],
        "c": [2],
        "chinese": "斑素躇抨",
        "id": 143,
        "length": 4,
        "p": [3],
        "pinyin": "bscp",
        "s": [1]
    }, {
        "b": [4],
        "chinese": "政伊熔伤被肪贷",
        "d": [6],
        "f": [5],
        "id": 144,
        "length": 7,
        "pinyin": "zyrsbfd",
        "r": [2],
        "s": [3],
        "y": [1],
        "z": [0]
    }, {
        "c": [4],
        "chinese": "刽殴女税郴锗熙截粱裳",
        "g": [0],
        "id": 145,
        "j": [7],
        "l": [8],
        "length": 10,
        "n": [2],
        "o": [1],
        "pinyin": "gonsczxjls",
        "s": [3, 9],
        "x": [6],
        "z": [5]
    }, {
        "chinese": "井掳正递铰答",
        "d": [3, 5],
        "id": 146,
        "j": [0, 4],
        "l": [1],
        "length": 6,
        "pinyin": "jlzdjd",
        "z": [2]
    }, {
        "chinese": "析释赋负脊嘎褂漠僳",
        "f": [2, 3],
        "g": [5, 6],
        "id": 147,
        "j": [4],
        "length": 9,
        "m": [7],
        "pinyin": "xsffjggms",
        "s": [1, 8],
        "x": [0]
    }, {
        "b": [6],
        "chinese": "配导辅莆鲸拉钵",
        "d": [1],
        "f": [2],
        "id": 148,
        "j": [4],
        "l": [5],
        "length": 7,
        "p": [0, 3],
        "pinyin": "pdfpjlb"
    }, {
        "chinese": "燥抨昨射",
        "id": 149,
        "length": 4,
        "p": [1],
        "pinyin": "zpzs",
        "s": [3],
        "z": [0, 2]
    }, {
        "chinese": "山嘎岂哈蜡篱需习动",
        "d": [8],
        "g": [1],
        "h": [3],
        "id": 150,
        "l": [4, 5],
        "length": 9,
        "pinyin": "sgqhllxxd",
        "q": [2],
        "s": [0],
        "x": [6, 7]
    }, {
        "chinese": "呸拓钾番够潭痒潘诅剃",
        "f": [3],
        "g": [4],
        "id": 151,
        "j": [2],
        "length": 10,
        "p": [0, 7],
        "pinyin": "ptjfgtypzt",
        "t": [1, 5, 9],
        "y": [6],
        "z": [8]
    }, {
        "b": [4],
        "chinese": "份汲四收剥翰",
        "f": [0],
        "h": [5],
        "id": 152,
        "j": [1],
        "length": 6,
        "pinyin": "fjssbh",
        "s": [2, 3]
    }, {
        "chinese": "咀躯糯诗",
        "id": 153,
        "j": [0],
        "length": 4,
        "n": [2],
        "pinyin": "jqns",
        "q": [1],
        "s": [3]
    }, {
        "a": [8],
        "chinese": "悉厄框厌岩越氏纲昂",
        "e": [1],
        "g": [7],
        "id": 154,
        "k": [2],
        "length": 9,
        "pinyin": "xekyyysga",
        "s": [6],
        "x": [0],
        "y": [3, 4, 5]
    }, {
        "chinese": "普又座桩硫钒浩腥氮鹅盈",
        "d": [8],
        "e": [9],
        "f": [5],
        "h": [6],
        "id": 155,
        "l": [4],
        "length": 11,
        "p": [0],
        "pinyin": "pyzzlfhxdey",
        "x": [7],
        "y": [1, 10],
        "z": [2, 3]
    }, {
        "chinese": "怒旗润烩盔妄",
        "h": [3],
        "id": 156,
        "k": [4],
        "length": 6,
        "n": [0],
        "pinyin": "nqrhkw",
        "q": [1],
        "r": [2],
        "w": [5]
    }, {
        "chinese": "阀锑收吨堕",
        "d": [3, 4],
        "f": [0],
        "id": 157,
        "length": 5,
        "pinyin": "ftsdd",
        "s": [2],
        "t": [1]
    }, {
        "chinese": "崖炬檄近闲局",
        "id": 158,
        "j": [1, 3, 5],
        "length": 6,
        "pinyin": "yjxjxj",
        "x": [2, 4],
        "y": [0]
    }, {
        "c": [2],
        "chinese": "央在畴吱怜",
        "id": 159,
        "l": [4],
        "length": 5,
        "pinyin": "yzczl",
        "y": [0],
        "z": [1, 3]
    }, {
        "b": [4],
        "chinese": "瘸泥各勾备瞪允谱优",
        "d": [5],
        "g": [2, 3],
        "id": 160,
        "length": 9,
        "n": [1],
        "p": [7],
        "pinyin": "qnggbdypy",
        "q": [0],
        "y": [6, 8]
    }, {
        "chinese": "昨冠批过绢血",
        "g": [1, 3],
        "id": 161,
        "j": [4],
        "length": 6,
        "p": [2],
        "pinyin": "zgpgjx",
        "x": [5],
        "z": [0]
    }, {
        "chinese": "旅碳货蹋单则桃甩摸饥",
        "d": [4],
        "h": [2],
        "id": 162,
        "j": [9],
        "l": [0],
        "length": 10,
        "m": [8],
        "pinyin": "lthtdztsmj",
        "s": [7],
        "t": [1, 3, 6],
        "z": [5]
    }, {
        "b": [2],
        "chinese": "拾诵饼序卧",
        "id": 163,
        "length": 5,
        "pinyin": "ssbxw",
        "s": [0, 1],
        "w": [4],
        "x": [3]
    }, {
        "b": [7],
        "c": [0],
        "chinese": "澈息帐逢菲贾考拌中烷悸",
        "f": [3, 4],
        "id": 164,
        "j": [5, 10],
        "k": [6],
        "length": 11,
        "pinyin": "cxzffjkbzwj",
        "w": [9],
        "x": [1],
        "z": [2, 8]
    }, {
        "b": [4, 7],
        "c": [2, 8, 10],
        "chinese": "阉乾闯堆叭吉牌鄙仇刨伺",
        "d": [3],
        "id": 165,
        "j": [5],
        "length": 11,
        "p": [6, 9],
        "pinyin": "yqcdbjpbcpc",
        "q": [1],
        "y": [0]
    }, {
        "c": [1, 3],
        "chinese": "拿驰跨郴箕恨",
        "h": [5],
        "id": 166,
        "j": [4],
        "k": [2],
        "length": 6,
        "n": [0],
        "pinyin": "nckcjh"
    }, {
        "a": [2],
        "c": [3],
        "chinese": "僚贱安炽",
        "id": 167,
        "j": [1],
        "l": [0],
        "length": 4,
        "pinyin": "ljac"
    }, {
        "c": [4],
        "chinese": "遁散棋呻偿痉像戍器危",
        "d": [0],
        "id": 168,
        "j": [5],
        "length": 10,
        "pinyin": "dsqscjxsqw",
        "q": [2, 8],
        "s": [1, 3, 7],
        "w": [9],
        "x": [6]
    }, {
        "chinese": "央屎壕煽隧整亲",
        "h": [2],
        "id": 169,
        "length": 7,
        "pinyin": "yshsszq",
        "q": [6],
        "s": [1, 3, 4],
        "y": [0],
        "z": [5]
    }, {
        "chinese": "焕带睦疾且",
        "d": [1],
        "h": [0],
        "id": 170,
        "j": [3],
        "length": 5,
        "m": [2],
        "pinyin": "hdmjq",
        "q": [4]
    }, {
        "chinese": "纂舷枪捉雇鲜性烤",
        "g": [4],
        "id": 171,
        "k": [7],
        "length": 8,
        "pinyin": "zxqzgxxk",
        "q": [2],
        "x": [1, 5, 6],
        "z": [0, 3]
    }, {
        "chinese": "永影量涡",
        "id": 172,
        "l": [2],
        "length": 4,
        "pinyin": "yylw",
        "w": [3],
        "y": [0, 1]
    }, {
        "c": [4],
        "chinese": "敏诱戴粳晨刻蜕骡浑",
        "d": [2],
        "h": [8],
        "id": 173,
        "j": [3],
        "k": [5],
        "l": [7],
        "length": 9,
        "m": [0],
        "pinyin": "mydjcktlh",
        "t": [6],
        "y": [1]
    }, {
        "c": [4, 5],
        "chinese": "囤虹瘦峙戳称头员",
        "d": [0],
        "h": [1],
        "id": 174,
        "length": 8,
        "pinyin": "dhszccty",
        "s": [2],
        "t": [6],
        "y": [7],
        "z": [3]
    }, {
        "b": [2],
        "chinese": "早霖堡关瓶勤哉左",
        "g": [3],
        "id": 175,
        "l": [1],
        "length": 8,
        "p": [4],
        "pinyin": "zlbgpqzz",
        "q": [5],
        "z": [0, 6, 7]
    }, {
        "chinese": "旦治液锑贱掌",
        "d": [0],
        "id": 176,
        "j": [4],
        "length": 6,
        "pinyin": "dzytjz",
        "t": [3],
        "y": [2],
        "z": [1, 5]
    }, {
        "c": [5],
        "chinese": "油同风网碰蝉拂没矩启竟",
        "f": [2, 6],
        "id": 177,
        "j": [8, 10],
        "length": 11,
        "m": [7],
        "p": [4],
        "pinyin": "ytfwpcfmjqj",
        "q": [9],
        "t": [1],
        "w": [3],
        "y": [0]
    }, {
        "chinese": "绦轨合潍更蜘",
        "g": [1, 4],
        "h": [2],
        "id": 178,
        "length": 6,
        "pinyin": "tghwgz",
        "t": [0],
        "w": [3],
        "z": [5]
    }, {
        "b": [3],
        "chinese": "搪辙烛拌英",
        "id": 179,
        "length": 5,
        "pinyin": "tzzby",
        "t": [0],
        "y": [4],
        "z": [1, 2]
    }, {
        "chinese": "遏仙柠菱末待忌煌品",
        "d": [5],
        "e": [0],
        "h": [7],
        "id": 180,
        "j": [6],
        "l": [3],
        "length": 9,
        "m": [4],
        "n": [2],
        "p": [8],
        "pinyin": "exnlmdjhp",
        "x": [1]
    }, {
        "c": [3, 6],
        "chinese": "矣仗沿摧侣涌菜吼",
        "h": [7],
        "id": 181,
        "l": [4],
        "length": 8,
        "pinyin": "yzyclych",
        "y": [0, 2, 5],
        "z": [1]
    }, {
        "c": [9],
        "chinese": "丹捎罚猾声姑燥唆盒伺",
        "d": [0],
        "f": [2],
        "g": [5],
        "h": [3, 8],
        "id": 182,
        "length": 10,
        "pinyin": "dsfhsgzshc",
        "s": [1, 4, 7],
        "z": [6]
    }, {
        "chinese": "互铰建踪悠",
        "h": [0],
        "id": 183,
        "j": [1, 2],
        "length": 5,
        "pinyin": "hjjzy",
        "y": [4],
        "z": [3]
    }, {
        "c": [2, 5, 6],
        "chinese": "尾狸楚迈倘粗痴鸟哄帝塔",
        "d": [9],
        "h": [8],
        "id": 184,
        "l": [1],
        "length": 11,
        "m": [3],
        "n": [7],
        "pinyin": "wlcmtccnhdt",
        "t": [4, 10],
        "w": [0]
    }, {
        "b": [3, 8],
        "chinese": "诣圭月闭挑叫惑忙标状浩",
        "g": [1],
        "h": [6, 10],
        "id": 185,
        "j": [5],
        "length": 11,
        "m": [7],
        "pinyin": "ygybtjhmbzh",
        "t": [4],
        "y": [0, 2],
        "z": [9]
    }, {
        "chinese": "猿狮眠违燥邹活囤伦油",
        "d": [7],
        "h": [6],
        "id": 186,
        "l": [8],
        "length": 10,
        "m": [2],
        "pinyin": "ysmwzzhdly",
        "s": [1],
        "w": [3],
        "y": [0, 9],
        "z": [4, 5]
    }, {
        "chinese": "砒炼占壹",
        "id": 187,
        "l": [1],
        "length": 4,
        "p": [0],
        "pinyin": "plzy",
        "y": [3],
        "z": [2]
    }, {
        "b": [3],
        "c": [2],
        "chinese": "恨造雏遍",
        "h": [0],
        "id": 188,
        "length": 4,
        "pinyin": "hzcb",
        "z": [1]
    }, {
        "c": [4],
        "chinese": "丝扰往缅惭蹋竟丧毡怕",
        "id": 189,
        "j": [6],
        "length": 10,
        "m": [3],
        "p": [9],
        "pinyin": "srwmctjszp",
        "r": [1],
        "s": [0, 7],
        "t": [5],
        "w": [2],
        "z": [8]
    }, {
        "b": [5],
        "chinese": "可涤煎是昼补蕊筷违梨",
        "d": [1],
        "id": 190,
        "j": [2],
        "k": [0, 7],
        "l": [9],
        "length": 10,
        "pinyin": "kdjszbrkwl",
        "r": [6],
        "s": [3],
        "w": [8],
        "z": [4]
    }, {
        "chinese": "溶怒洽椰锭税遂非",
        "d": [4],
        "f": [7],
        "id": 191,
        "length": 8,
        "n": [1],
        "pinyin": "rnqydssf",
        "q": [2],
        "r": [0],
        "s": [5, 6],
        "y": [3]
    }, {
        "chinese": "掠狸凳钒跃淤那划",
        "d": [2],
        "f": [3],
        "h": [7],
        "id": 192,
        "l": [0, 1],
        "length": 8,
        "n": [6],
        "pinyin": "lldfyynh",
        "y": [4, 5]
    }, {
        "b": [0, 3],
        "chinese": "并赵捐勃减",
        "id": 193,
        "j": [2, 4],
        "length": 5,
        "pinyin": "bzjbj",
        "z": [1]
    }, {
        "b": [2],
        "c": [0],
        "chinese": "垂椰摆虽搁裙赠和都巡黎",
        "d": [8],
        "g": [4],
        "h": [7],
        "id": 194,
        "l": [10],
        "length": 11,
        "pinyin": "cybsgqzhdxl",
        "q": [5],
        "s": [3],
        "x": [9],
        "y": [1],
        "z": [6]
    }, {
        "chinese": "芥阉选酶垢秦",
        "g": [4],
        "id": 195,
        "j": [0],
        "length": 6,
        "m": [3],
        "pinyin": "jyxmgq",
        "q": [5],
        "x": [2],
        "y": [1]
    }, {
        "chinese": "加疆招怨荤",
        "h": [4],
        "id": 196,
        "j": [0, 1],
        "length": 5,
        "pinyin": "jjzyh",
        "y": [3],
        "z": [2]
    }, {
        "chinese": "匪诲顺业",
        "f": [0],
        "h": [1],
        "id": 197,
        "length": 4,
        "pinyin": "fhsy",
        "s": [2],
        "y": [3]
    }, {
        "chinese": "余全附念",
        "f": [2],
        "id": 198,
        "length": 4,
        "n": [3],
        "pinyin": "yqfn",
        "q": [1],
        "y": [0]
    }, {
        "c": [0],
        "chinese": "颤腾烦捉树惦苦",
        "d": [5],
        "f": [2],
        "id": 199,
        "k": [6],
        "length": 7,
        "pinyin": "ctfzsdk",
        "s": [4],
        "t": [1],
        "z": [3]
    }, {
        "chinese": "控燎制瞻替轨岂颠瀑啮寂",
        "d": [7],
        "g": [5],
        "id": 200,
        "j": [10],
        "k": [0],
        "l": [1],
        "length": 11,
        "n": [9],
        "p": [8],
        "pinyin": "klzztgqdpnj",
        "q": [6],
        "t": [4],
        "z": [2, 3]
    }, {
        "chinese": "仅俘珠汀苏而石轻禁",
        "e": [5],
        "f": [1],
        "id": 201,
        "j": [0, 8],
        "length": 9,
        "pinyin": "jfztsesqj",
        "q": [7],
        "s": [4, 6],
        "t": [3],
        "z": [2]
    }, {
        "a": [0],
        "chinese": "挨汀剖磷号栖胳区",
        "g": [6],
        "h": [4],
        "id": 202,
        "l": [3],
        "length": 8,
        "p": [2],
        "pinyin": "atplhqgq",
        "q": [5, 7],
        "t": [1]
    }, {
        "b": [6],
        "c": [2, 4, 9],
        "chinese": "呵日车跌澄记伯陶襄丑",
        "d": [3],
        "h": [0],
        "id": 203,
        "j": [5],
        "length": 10,
        "pinyin": "hrcdcjbtxc",
        "r": [1],
        "t": [7],
        "x": [8]
    }, {
        "chinese": "槐酣讥列阮梅慨幌谋",
        "h": [0, 1, 7],
        "id": 204,
        "j": [2],
        "k": [6],
        "l": [3],
        "length": 9,
        "m": [5, 8],
        "pinyin": "hhjlrmkhm",
        "r": [4]
    }, {
        "c": [1, 7],
        "chinese": "釜蚕鲁酌铺盗艰策蚁",
        "d": [5],
        "f": [0],
        "id": 205,
        "j": [6],
        "l": [2],
        "length": 9,
        "p": [4],
        "pinyin": "fclzpdjcy",
        "y": [8],
        "z": [3]
    }, {
        "c": [2],
        "chinese": "登郧差喜腑敦您",
        "d": [0, 5],
        "f": [4],
        "id": 206,
        "length": 7,
        "n": [6],
        "pinyin": "dycxfdn",
        "x": [3],
        "y": [1]
    }, {
        "c": [0, 1],
        "chinese": "灿处住镣",
        "id": 207,
        "l": [3],
        "length": 4,
        "pinyin": "cczl",
        "z": [2]
    }, {
        "c": [8],
        "chinese": "湾劣天逝女娩男牧疮渠联",
        "id": 208,
        "l": [1, 10],
        "length": 11,
        "m": [5, 7],
        "n": [4, 6],
        "pinyin": "wltsnmnmcql",
        "q": [9],
        "s": [3],
        "t": [2],
        "w": [0]
    }, {
        "a": [6],
        "chinese": "翁钨僧距莱惊胺",
        "id": 209,
        "j": [3, 5],
        "l": [4],
        "length": 7,
        "pinyin": "wwsjlja",
        "s": [2],
        "w": [0, 1]
    }, {
        "chinese": "供涅返喂社",
        "f": [2],
        "g": [0],
        "id": 210,
        "length": 5,
        "n": [1],
        "pinyin": "gnfws",
        "s": [4],
        "w": [3]
    }, {
        "b": [6],
        "chinese": "亮棺所蹄炼睡耙眶赌潦",
        "d": [8],
        "g": [1],
        "id": 211,
        "k": [7],
        "l": [0, 4, 9],
        "length": 10,
        "pinyin": "lgstlsbkdl",
        "s": [2, 5],
        "t": [3]
    }, {
        "a": [2],
        "c": [3, 9],
        "chinese": "刷甜氨扯项虞海及镇醋旱",
        "h": [6, 10],
        "id": 212,
        "j": [7],
        "length": 11,
        "pinyin": "stacxyhjzch",
        "s": [0],
        "t": [1],
        "x": [4],
        "y": [5],
        "z": [8]
    }, {
        "c": [1],
        "chinese": "鹰宠泼计萍嘶氛赶用",
        "f": [6],
        "g": [7],
        "id": 213,
        "j": [3],
        "length": 9,
        "p": [2, 4],
        "pinyin": "ycpjpsfgy",
        "s": [5],
        "y": [0, 8]
    }, {
        "b": [0],
        "chinese": "邦链酚槛",
        "f": [2],
        "id": 214,
        "k": [3],
        "l": [1],
        "length": 4,
        "pinyin": "blfk"
    }, {
        "chinese": "茧钻赵漾枉",
        "id": 215,
        "j": [0],
        "length": 5,
        "pinyin": "jzzyw",
        "w": [4],
        "y": [3],
        "z": [1, 2]
    }, {
        "b": [6],
        "chinese": "食孤然硼掩栋钡棋",
        "d": [5],
        "g": [1],
        "id": 216,
        "length": 8,
        "p": [3],
        "pinyin": "sgrpydbq",
        "q": [7],
        "r": [2],
        "s": [0],
        "y": [4]
    }, {
        "c": [0, 1, 6],
        "chinese": "钞畴煽甘贼姿沧挖咒",
        "g": [3],
        "id": 217,
        "length": 9,
        "pinyin": "ccsgzzcwz",
        "s": [2],
        "w": [7],
        "z": [4, 5, 8]
    }, {
        "chinese": "邹总厦念",
        "id": 218,
        "length": 4,
        "n": [3],
        "pinyin": "zzsn",
        "s": [2],
        "z": [0, 1]
    }, {
        "chinese": "捉殊茄酿叮侥赏",
        "d": [4],
        "id": 219,
        "j": [2, 5],
        "length": 7,
        "n": [3],
        "pinyin": "zsjndjs",
        "s": [1, 6],
        "z": [0]
    }, {
        "chinese": "汐逻艳叠柬燃藕",
        "d": [3],
        "id": 220,
        "j": [4],
        "l": [1],
        "length": 7,
        "o": [6],
        "pinyin": "xlydjro",
        "r": [5],
        "x": [0],
        "y": [2]
    }, {
        "a": [5],
        "b": [4],
        "chinese": "法寡绦莹饼隘",
        "f": [0],
        "g": [1],
        "id": 221,
        "length": 6,
        "pinyin": "fgtyba",
        "t": [2],
        "y": [3]
    }, {
        "b": [5],
        "c": [6],
        "chinese": "炉烛浙题搜比掣真",
        "id": 222,
        "l": [0],
        "length": 8,
        "pinyin": "lzztsbcz",
        "s": [4],
        "t": [3],
        "z": [1, 2, 7]
    }, {
        "c": [8],
        "chinese": "珠剪浇睫恃馈享遮忱古",
        "g": [9],
        "id": 223,
        "j": [1, 2, 3],
        "k": [5],
        "length": 10,
        "pinyin": "zjjjskxzcg",
        "s": [4],
        "x": [6],
        "z": [0, 7]
    }, {
        "b": [5],
        "chinese": "结杰裔松躺傍徒袜",
        "id": 224,
        "j": [0, 1],
        "length": 8,
        "pinyin": "jjystbtw",
        "s": [3],
        "t": [4, 6],
        "w": [7],
        "y": [2]
    }, {
        "c": [3],
        "chinese": "咏余业成",
        "id": 225,
        "length": 4,
        "pinyin": "yyyc",
        "y": [0, 1, 2]
    }, {
        "b": [6, 7],
        "chinese": "沽化很际限深疤蔽召魁光",
        "g": [0, 10],
        "h": [1, 2],
        "id": 226,
        "j": [3],
        "k": [9],
        "length": 11,
        "pinyin": "ghhjxsbbzkg",
        "s": [5],
        "x": [4],
        "z": [8]
    }, {
        "chinese": "彝修孪桂蕾脐",
        "g": [3],
        "id": 227,
        "l": [2, 4],
        "length": 6,
        "pinyin": "yxlglq",
        "q": [5],
        "x": [1],
        "y": [0]
    }, {
        "c": [4],
        "chinese": "激谎对坍菜愿引缉徽晃更",
        "d": [2],
        "g": [10],
        "h": [1, 8, 9],
        "id": 228,
        "j": [0, 7],
        "length": 11,
        "pinyin": "jhdtcyyjhhg",
        "t": [3],
        "y": [5, 6]
    }, {
        "chinese": "嗡隙硝好枝",
        "h": [3],
        "id": 229,
        "length": 5,
        "pinyin": "wxxhz",
        "w": [0],
        "x": [1, 2],
        "z": [4]
    }, {
        "chinese": "祖煽妒即洗抨",
        "d": [2],
        "id": 230,
        "j": [3],
        "length": 6,
        "p": [5],
        "pinyin": "zsdjxp",
        "s": [1],
        "x": [4],
        "z": [0]
    }, {
        "b": [3],
        "chinese": "恰恒修靶与",
        "h": [1],
        "id": 231,
        "length": 5,
        "pinyin": "qhxby",
        "q": [0],
        "x": [2],
        "y": [4]
    }, {
        "b": [4],
        "chinese": "薪鸿教泥贬闺焚",
        "f": [6],
        "g": [5],
        "h": [1],
        "id": 232,
        "j": [2],
        "length": 7,
        "n": [3],
        "pinyin": "xhjnbgf",
        "x": [0]
    }, {
        "b": [2],
        "chinese": "冬瘴疤务省葵",
        "d": [0],
        "id": 233,
        "k": [5],
        "length": 6,
        "pinyin": "dzbwsk",
        "s": [4],
        "w": [3],
        "z": [1]
    }, {
        "b": [8],
        "c": [3],
        "chinese": "冬盼秦粹秆溜诊隐脖溪",
        "d": [0],
        "g": [4],
        "id": 234,
        "l": [5],
        "length": 10,
        "p": [1],
        "pinyin": "dpqcglzybx",
        "q": [2],
        "x": [9],
        "y": [7],
        "z": [6]
    }, {
        "chinese": "卖遵姑瑚",
        "g": [2],
        "h": [3],
        "id": 235,
        "length": 4,
        "m": [0],
        "pinyin": "mzgh",
        "z": [1]
    }, {
        "c": [1, 6],
        "chinese": "誊错膝瞪榔偷碴邱",
        "d": [3],
        "id": 236,
        "l": [4],
        "length": 8,
        "pinyin": "tcxdltcq",
        "q": [7],
        "t": [0, 5],
        "x": [2]
    }, {
        "b": [3],
        "chinese": "演嗓砚被盟货",
        "h": [5],
        "id": 237,
        "length": 6,
        "m": [4],
        "pinyin": "ysybmh",
        "s": [1],
        "y": [0, 2]
    }, {
        "c": [1],
        "chinese": "拙厕沁将萧况",
        "id": 238,
        "j": [3],
        "k": [5],
        "length": 6,
        "pinyin": "zcqjxk",
        "q": [2],
        "x": [4],
        "z": [0]
    }, {
        "chinese": "绽碟疡金蛋谜舆",
        "d": [1, 4],
        "id": 239,
        "j": [3],
        "length": 7,
        "m": [5],
        "pinyin": "zdyjdmy",
        "y": [2, 6],
        "z": [0]
    }, {
        "b": [3],
        "chinese": "萍所窖卜践彦",
        "id": 240,
        "j": [2, 4],
        "length": 6,
        "p": [0],
        "pinyin": "psjbjy",
        "s": [1],
        "y": [5]
    }, {
        "c": [7, 8],
        "chinese": "锣刀喇挺挣际舞存缠荫钒",
        "d": [1],
        "f": [10],
        "id": 241,
        "j": [5],
        "l": [0, 2],
        "length": 11,
        "pinyin": "ldltzjwccyf",
        "t": [3],
        "w": [6],
        "y": [9],
        "z": [4]
    }, {
        "b": [0],
        "c": [3, 4],
        "chinese": "玻祁进纯船讣瘦阵潍孟醉",
        "f": [5],
        "id": 242,
        "j": [2],
        "length": 11,
        "m": [9],
        "pinyin": "bqjccfszwmz",
        "q": [1],
        "s": [6],
        "w": [8],
        "z": [7, 10]
    }, {
        "chinese": "教物蚊淮讫挖燕",
        "h": [3],
        "id": 243,
        "j": [0],
        "length": 7,
        "pinyin": "jwwhqwy",
        "q": [4],
        "w": [1, 2, 5],
        "y": [6]
    }, {
        "chinese": "佯撼拼课梯拯痔司了民侠",
        "h": [1],
        "id": 244,
        "k": [3],
        "l": [8],
        "length": 11,
        "m": [9],
        "p": [2],
        "pinyin": "yhpktzzslmx",
        "s": [7],
        "t": [4],
        "x": [10],
        "y": [0],
        "z": [5, 6]
    }, {
        "chinese": "政团衰茵窥猫肛乱临娄虐",
        "g": [6],
        "id": 245,
        "k": [4],
        "l": [7, 8, 9],
        "length": 11,
        "m": [5],
        "n": [10],
        "pinyin": "ztsykmgllln",
        "s": [2],
        "t": [1],
        "y": [3],
        "z": [0]
    }, {
        "b": [0],
        "chinese": "薄忌葛晦五麻恼析嚣俄",
        "e": [9],
        "g": [2],
        "h": [3],
        "id": 246,
        "j": [1],
        "length": 10,
        "m": [5],
        "n": [6],
        "pinyin": "bjghwmnxxe",
        "w": [4],
        "x": [7, 8]
    }, {
        "b": [2, 4],
        "c": [7],
        "chinese": "械疥背伤并蚊社曾昭",
        "id": 247,
        "j": [1],
        "length": 9,
        "pinyin": "xjbsbwscz",
        "s": [3, 6],
        "w": [5],
        "x": [0],
        "z": [8]
    }, {
        "b": [10],
        "c": [9],
        "chinese": "葵吞绪诅闹梳近糊惺触玻",
        "h": [7],
        "id": 248,
        "j": [6],
        "k": [0],
        "length": 11,
        "n": [4],
        "pinyin": "ktxznsjhxcb",
        "s": [5],
        "t": [1],
        "x": [2, 8],
        "z": [3]
    }, {
        "b": [2],
        "c": [0],
        "chinese": "沉圾钵衔酉",
        "id": 249,
        "j": [1],
        "length": 5,
        "pinyin": "cjbxy",
        "x": [3],
        "y": [4]
    }, {
        "b": [1],
        "chinese": "堕拨亨迢",
        "d": [0],
        "h": [2],
        "id": 250,
        "length": 4,
        "pinyin": "dbht",
        "t": [3]
    }, {
        "c": [2],
        "chinese": "菩窄颤钨砧",
        "id": 251,
        "length": 5,
        "p": [0],
        "pinyin": "pzcwz",
        "w": [3],
        "z": [1, 4]
    }, {
        "c": [0],
        "chinese": "常窍匿尽桃抗旋郝鞠状显",
        "h": [7],
        "id": 252,
        "j": [3, 8],
        "k": [5],
        "length": 11,
        "n": [2],
        "pinyin": "cqnjtkxhjzx",
        "q": [1],
        "t": [4],
        "x": [6, 10],
        "z": [9]
    }, {
        "chinese": "缀纽们基挺",
        "id": 253,
        "j": [3],
        "length": 5,
        "m": [2],
        "n": [1],
        "pinyin": "znmjt",
        "t": [4],
        "z": [0]
    }, {
        "c": [6],
        "chinese": "舍瘩粘急搅柔床",
        "d": [1],
        "id": 254,
        "j": [3, 4],
        "length": 7,
        "pinyin": "sdzjjrc",
        "r": [5],
        "s": [0],
        "z": [2]
    }, {
        "a": [4],
        "chinese": "蓑煽企亮胺沈怪准智",
        "g": [6],
        "id": 255,
        "l": [3],
        "length": 9,
        "pinyin": "ssqlasgzz",
        "q": [2],
        "s": [0, 1, 5],
        "z": [7, 8]
    }, {
        "c": [4],
        "chinese": "畏镰硷股畴技调跨",
        "d": [6],
        "g": [3],
        "id": 256,
        "j": [2, 5],
        "k": [7],
        "l": [1],
        "length": 8,
        "pinyin": "wljgcjdk",
        "w": [0]
    }, {
        "chinese": "糟辑颅人",
        "id": 257,
        "j": [1],
        "l": [2],
        "length": 4,
        "pinyin": "zjlr",
        "r": [3],
        "z": [0]
    }, {
        "b": [1],
        "c": [0, 3],
        "chinese": "藏痹晾宠",
        "id": 258,
        "l": [2],
        "length": 4,
        "pinyin": "cblc"
    }, {
        "c": [1],
        "chinese": "疽测伊桩迈",
        "id": 259,
        "j": [0],
        "length": 5,
        "m": [4],
        "pinyin": "jcyzm",
        "y": [2],
        "z": [3]
    }, {
        "c": [3],
        "chinese": "屠妨惠苍豁",
        "f": [1],
        "h": [2, 4],
        "id": 260,
        "length": 5,
        "pinyin": "tfhch",
        "t": [0]
    }, {
        "b": [4],
        "c": [8],
        "chinese": "匠哼旬苹鼻露聘归传",
        "g": [7],
        "h": [1],
        "id": 261,
        "j": [0],
        "l": [5],
        "length": 9,
        "p": [3, 6],
        "pinyin": "jhxpblpgc",
        "x": [2]
    }, {
        "b": [1],
        "c": [3],
        "chinese": "捂钡蹈衬",
        "d": [2],
        "id": 262,
        "length": 4,
        "pinyin": "wbdc",
        "w": [0]
    }, {
        "b": [4],
        "c": [2, 10],
        "chinese": "千礼持枣瘪且澎鸿屿置翅",
        "h": [7],
        "id": 263,
        "l": [1],
        "length": 11,
        "p": [6],
        "pinyin": "qlczbqphyzc",
        "q": [0, 5],
        "y": [8],
        "z": [3, 9]
    }, {
        "c": [9],
        "chinese": "孵枫婶宜耽脉徊释娥篡饺",
        "d": [4],
        "e": [8],
        "f": [0, 1],
        "h": [6],
        "id": 264,
        "j": [10],
        "length": 11,
        "m": [5],
        "pinyin": "ffsydmhsecj",
        "s": [2, 7],
        "y": [3]
    }, {
        "chinese": "淖广室霉起谣牺",
        "g": [1],
        "id": 265,
        "length": 7,
        "m": [3],
        "n": [0],
        "pinyin": "ngsmqyx",
        "q": [4],
        "s": [2],
        "x": [6],
        "y": [5]
    }, {
        "b": [3],
        "c": [0, 5],
        "chinese": "差祈员标砚虫",
        "id": 266,
        "length": 6,
        "pinyin": "cqybyc",
        "q": [1],
        "y": [2, 4]
    }, {
        "chinese": "研晰涣魔享",
        "h": [2],
        "id": 267,
        "length": 5,
        "m": [3],
        "pinyin": "yxhmx",
        "x": [1, 4],
        "y": [0]
    }, {
        "b": [0],
        "chinese": "报鉴乞巧弃抚颅汁履谬垃",
        "f": [5],
        "id": 268,
        "j": [1],
        "l": [6, 8, 10],
        "length": 11,
        "m": [9],
        "pinyin": "bjqqqflzlml",
        "q": [2, 3, 4],
        "z": [7]
    }, {
        "b": [3],
        "chinese": "笑锣耘避",
        "id": 269,
        "l": [1],
        "length": 4,
        "pinyin": "xlyb",
        "x": [0],
        "y": [2]
    }, {
        "c": [3, 9],
        "chinese": "赴弟垢刺退竿峭羊梯厨密",
        "d": [1],
        "f": [0],
        "g": [2, 5],
        "id": 270,
        "length": 11,
        "m": [10],
        "pinyin": "fdgctgqytcm",
        "q": [6],
        "t": [4, 8],
        "y": [7]
    }, {
        "c": [3],
        "chinese": "龚帘刻差栅假陇",
        "g": [0],
        "id": 271,
        "j": [5],
        "k": [2],
        "l": [1, 6],
        "length": 7,
        "pinyin": "glkczjl",
        "z": [4]
    }, {
        "chinese": "颧骂隔靛",
        "d": [3],
        "g": [2],
        "id": 272,
        "length": 4,
        "m": [1],
        "pinyin": "qmgd",
        "q": [0]
    }, {
        "a": [4],
        "chinese": "娩抹荆斜爱屿遇道葵漠",
        "d": [7],
        "id": 273,
        "j": [2],
        "k": [8],
        "length": 10,
        "m": [0, 1, 9],
        "pinyin": "mmjxayydkm",
        "x": [3],
        "y": [5, 6]
    }, {
        "a": [3],
        "chinese": "迈缓陌盎房涅锅里僻",
        "f": [4],
        "g": [6],
        "h": [1],
        "id": 274,
        "l": [7],
        "length": 9,
        "m": [0, 2],
        "n": [5],
        "p": [8],
        "pinyin": "mhmafnglp"
    }, {
        "b": [2],
        "c": [1],
        "chinese": "偏厂蓖炭舷欺骨智砰祸",
        "g": [6],
        "h": [9],
        "id": 275,
        "length": 10,
        "p": [0, 8],
        "pinyin": "pcbtxqgzph",
        "q": [5],
        "t": [3],
        "x": [4],
        "z": [7]
    }, {
        "b": [8],
        "chinese": "干澜拴育肯娇泽娠冰侍馁",
        "g": [0],
        "id": 276,
        "j": [5],
        "k": [4],
        "l": [1],
        "length": 11,
        "n": [10],
        "pinyin": "glsykjzsbsn",
        "s": [2, 7, 9],
        "y": [3],
        "z": [6]
    }, {
        "c": [4, 5],
        "chinese": "鞋悯邯墩刺唇",
        "d": [3],
        "h": [2],
        "id": 277,
        "length": 6,
        "m": [1],
        "pinyin": "xmhdcc",
        "x": [0]
    }, {
        "c": [3],
        "chinese": "戏钾秒残乳闪允盼嫩排",
        "id": 278,
        "j": [1],
        "length": 10,
        "m": [2],
        "n": [8],
        "p": [7, 9],
        "pinyin": "xjmcrsypnp",
        "r": [4],
        "s": [5],
        "x": [0],
        "y": [6]
    }, {
        "b": [3],
        "chinese": "忙阜拇狈滚恨匠埂遂",
        "f": [1],
        "g": [4, 7],
        "h": [5],
        "id": 279,
        "j": [6],
        "length": 9,
        "m": [0, 2],
        "pinyin": "mfmbghjgs",
        "s": [8]
    }, {
        "c": [4],
        "chinese": "戮明归嘶喘锈",
        "g": [2],
        "id": 280,
        "l": [0],
        "length": 6,
        "m": [1],
        "pinyin": "lmgscx",
        "s": [3],
        "x": [5]
    }, {
        "chinese": "岛馆舔散",
        "d": [0],
        "g": [1],
        "id": 281,
        "length": 4,
        "pinyin": "dgts",
        "s": [3],
        "t": [2]
    }, {
        "c": [4],
        "chinese": "蝶离盗独晨忧其擂掇娜",
        "d": [0, 2, 3, 8],
        "id": 282,
        "l": [1, 7],
        "length": 10,
        "n": [9],
        "pinyin": "dlddcyqldn",
        "q": [6],
        "y": [5]
    }, {
        "c": [10],
        "chinese": "姆螺纱痘拱喷架抓澎菏场",
        "d": [3],
        "g": [4],
        "h": [9],
        "id": 283,
        "j": [6],
        "l": [1],
        "length": 11,
        "m": [0],
        "p": [5, 8],
        "pinyin": "mlsdgpjzphc",
        "s": [2],
        "z": [7]
    }, {
        "c": [9],
        "chinese": "足作借聚命昏考熙遮抄践",
        "h": [5],
        "id": 284,
        "j": [2, 3, 10],
        "k": [6],
        "length": 11,
        "m": [4],
        "pinyin": "zzjjmhkxzcj",
        "x": [7],
        "z": [0, 1, 8]
    }, {
        "b": [1, 2, 6, 7],
        "c": [0],
        "chinese": "齿编炳捡聘丝卑哺声",
        "id": 285,
        "j": [3],
        "length": 9,
        "p": [4],
        "pinyin": "cbbjpsbbs",
        "s": [5, 8]
    }, {
        "c": [0, 4],
        "chinese": "蹭资猪旨翠趣甥殿交州宵",
        "d": [7],
        "id": 286,
        "j": [8],
        "length": 11,
        "pinyin": "czzzcqsdjzx",
        "q": [5],
        "s": [6],
        "x": [10],
        "z": [1, 2, 3, 9]
    }, {
        "a": [5],
        "c": [6],
        "chinese": "税拎逆芽健肮嘲邱刊缝",
        "f": [9],
        "id": 287,
        "j": [4],
        "k": [8],
        "l": [1],
        "length": 10,
        "n": [2],
        "pinyin": "slnyjacqkf",
        "q": [7],
        "s": [0],
        "y": [3]
    }, {
        "c": [0],
        "chinese": "草锚冬旅舅愉滴拯第暮",
        "d": [2, 6, 8],
        "id": 288,
        "j": [4],
        "l": [3],
        "length": 10,
        "m": [1, 9],
        "pinyin": "cmdljydzdm",
        "y": [5],
        "z": [7]
    }, {
        "c": [5],
        "chinese": "启隐路繁致呈",
        "f": [3],
        "id": 289,
        "l": [2],
        "length": 6,
        "pinyin": "qylfzc",
        "q": [0],
        "y": [1],
        "z": [4]
    }, {
        "b": [7],
        "chinese": "相烹另栈睛桔跑把檄伊",
        "id": 290,
        "j": [4, 5],
        "l": [2],
        "length": 10,
        "p": [1, 6],
        "pinyin": "xplzjjpbxy",
        "x": [0, 8],
        "y": [9],
        "z": [3]
    }, {
        "chinese": "惹荧捎喊郝",
        "h": [3, 4],
        "id": 291,
        "length": 5,
        "pinyin": "ryshh",
        "r": [0],
        "s": [2],
        "y": [1]
    }, {
        "b": [9],
        "c": [2],
        "chinese": "蝗清裁到归虚辙斡睹邦讥",
        "d": [3, 8],
        "g": [4],
        "h": [0],
        "id": 292,
        "j": [10],
        "length": 11,
        "pinyin": "hqcdgxzwdbj",
        "q": [1],
        "w": [7],
        "x": [5],
        "z": [6]
    }, {
        "b": [1],
        "c": [3],
        "chinese": "厉悲带曾廉裤欺",
        "d": [2],
        "id": 293,
        "k": [5],
        "l": [0, 4],
        "length": 7,
        "pinyin": "lbdclkq",
        "q": [6]
    }, {
        "b": [8],
        "chinese": "李续聊煽皿仆娇宛遍郡",
        "id": 294,
        "j": [6, 9],
        "l": [0, 2],
        "length": 10,
        "m": [4],
        "p": [5],
        "pinyin": "lxlsmpjwbj",
        "s": [3],
        "w": [7],
        "x": [1]
    }, {
        "chinese": "吏桓洋舍赶屹啡",
        "f": [6],
        "g": [4],
        "h": [1],
        "id": 295,
        "l": [0],
        "length": 7,
        "pinyin": "lhysgyf",
        "s": [3],
        "y": [2, 5]
    }, {
        "chinese": "柿胶售殆",
        "d": [3],
        "id": 296,
        "j": [1],
        "length": 4,
        "pinyin": "sjsd",
        "s": [0, 2]
    }, {
        "a": [2],
        "c": [5],
        "chinese": "雁务安饺娇炊艘棺",
        "g": [7],
        "id": 297,
        "j": [3, 4],
        "length": 8,
        "pinyin": "ywajjcsg",
        "s": [6],
        "w": [1],
        "y": [0]
    }, {
        "chinese": "夺奋倒鞠蛆",
        "d": [0, 2],
        "f": [1],
        "id": 298,
        "j": [3],
        "length": 5,
        "pinyin": "dfdjq",
        "q": [4]
    }, {
        "chinese": "拢去永胎寄改啪余",
        "g": [5],
        "id": 299,
        "j": [4],
        "l": [0],
        "length": 8,
        "p": [6],
        "pinyin": "lqytjgpy",
        "q": [1],
        "t": [3],
        "y": [2, 7]
    }, {
        "b": [2, 5, 6, 8],
        "c": [9],
        "chinese": "赶肌必午顿拜炳铺蔽郴",
        "d": [4],
        "g": [0],
        "id": 300,
        "j": [1],
        "length": 10,
        "p": [7],
        "pinyin": "gjbwdbbpbc",
        "w": [3]
    }, {
        "chinese": "坞晕网习帕",
        "id": 301,
        "length": 5,
        "p": [4],
        "pinyin": "wywxp",
        "w": [0, 2],
        "x": [3],
        "y": [1]
    }, {
        "chinese": "军家涩可",
        "id": 302,
        "j": [0, 1],
        "k": [3],
        "length": 4,
        "pinyin": "jjsk",
        "s": [2]
    }, {
        "b": [5, 7],
        "chinese": "胚琶谷颠彦镑悠抱",
        "d": [3],
        "g": [2],
        "id": 303,
        "length": 8,
        "p": [0, 1],
        "pinyin": "ppgdybyb",
        "y": [4, 6]
    }, {
        "a": [1],
        "b": [8],
        "chinese": "尿俺小挞靡寐疹呀鞭",
        "id": 304,
        "length": 9,
        "m": [4, 5],
        "n": [0],
        "pinyin": "naxtmmzyb",
        "t": [3],
        "x": [2],
        "y": [7],
        "z": [6]
    }, {
        "c": [5],
        "chinese": "嘻又篱扇翁矗唾吓杰滋妆",
        "id": 305,
        "j": [8],
        "l": [2],
        "length": 11,
        "pinyin": "xylswctxjzz",
        "s": [3],
        "t": [6],
        "w": [4],
        "x": [0, 7],
        "y": [1],
        "z": [9, 10]
    }, {
        "b": [3, 5],
        "chinese": "判滥詹倍绥伴",
        "id": 306,
        "l": [1],
        "length": 6,
        "p": [0],
        "pinyin": "plzbsb",
        "s": [4],
        "z": [2]
    }, {
        "chinese": "趴去耘况",
        "id": 307,
        "k": [3],
        "length": 4,
        "p": [0],
        "pinyin": "pqyk",
        "q": [1],
        "y": [2]
    }, {
        "b": [1, 3],
        "c": [7],
        "chinese": "涌崩袱勃教冒咯承嘉攒",
        "f": [2],
        "g": [6],
        "id": 308,
        "j": [4, 8],
        "length": 10,
        "m": [5],
        "pinyin": "ybfbjmgcjz",
        "y": [0],
        "z": [9]
    }, {
        "chinese": "氯少禽兹搜华疼珐",
        "f": [7],
        "h": [5],
        "id": 309,
        "l": [0],
        "length": 8,
        "pinyin": "lsqzshtf",
        "q": [2],
        "s": [1, 4],
        "t": [6],
        "z": [3]
    }, {
        "b": [2],
        "chinese": "面胖毙时峭希可钱抠",
        "id": 310,
        "k": [6, 8],
        "length": 9,
        "m": [0],
        "p": [1],
        "pinyin": "mpbsqxkqk",
        "q": [4, 7],
        "s": [3],
        "x": [5]
    }, {
        "a": [7],
        "chinese": "廷俊软镶恭秧锣隘有",
        "g": [4],
        "id": 311,
        "j": [1],
        "l": [6],
        "length": 9,
        "pinyin": "tjrxgylay",
        "r": [2],
        "t": [0],
        "x": [3],
        "y": [5, 8]
    }, {
        "chinese": "员福指藻呸谣钓",
        "d": [6],
        "f": [1],
        "id": 312,
        "length": 7,
        "p": [4],
        "pinyin": "yfzzpyd",
        "y": [0, 5],
        "z": [2, 3]
    }, {
        "chinese": "锹医几患佣礼赞",
        "h": [3],
        "id": 313,
        "j": [2],
        "l": [5],
        "length": 7,
        "pinyin": "qyjhylz",
        "q": [0],
        "y": [1, 4],
        "z": [6]
    }, {
        "chinese": "殃铜她鸦乳冈杨叮陆惯",
        "d": [7],
        "g": [5, 9],
        "id": 314,
        "l": [8],
        "length": 10,
        "pinyin": "yttyrgydlg",
        "r": [4],
        "t": [1, 2],
        "y": [0, 3, 6]
    }, {
        "b": [5, 6],
        "c": [0],
        "chinese": "仇泪竞桃瞬柄钵疥煎饰",
        "id": 315,
        "j": [2, 7, 8],
        "l": [1],
        "length": 10,
        "pinyin": "cljtsbbjjs",
        "s": [4, 9],
        "t": [3]
    }, {
        "chinese": "付溺自短",
        "d": [3],
        "f": [0],
        "id": 316,
        "length": 4,
        "n": [1],
        "pinyin": "fnzd",
        "z": [2]
    }, {
        "a": [5],
        "chinese": "糕吏凉挪毡懊误坦",
        "g": [0],
        "id": 317,
        "l": [1, 2],
        "length": 8,
        "n": [3],
        "pinyin": "gllnzawt",
        "t": [7],
        "w": [6],
        "z": [4]
    }, {
        "b": [0, 4],
        "c": [1, 5],
        "chinese": "扮秤姨康勃澄慑柿痢柬券",
        "id": 318,
        "j": [9],
        "k": [3],
        "l": [8],
        "length": 11,
        "pinyin": "bcykbcssljq",
        "q": [10],
        "s": [6, 7],
        "y": [2]
    }, {
        "b": [1],
        "chinese": "萨背访绘月功",
        "f": [2],
        "g": [5],
        "h": [3],
        "id": 319,
        "length": 6,
        "pinyin": "sbfhyg",
        "s": [0],
        "y": [4]
    }, {
        "chinese": "塔铁公帅衙",
        "g": [2],
        "id": 320,
        "length": 5,
        "pinyin": "ttgsy",
        "s": [3],
        "t": [0, 1],
        "y": [4]
    }, {
        "c": [6],
        "chinese": "厌蹈壕实扛许船",
        "d": [1],
        "h": [2],
        "id": 321,
        "k": [4],
        "length": 7,
        "pinyin": "ydhskxc",
        "s": [3],
        "x": [5],
        "y": [0]
    }, {
        "c": [0],
        "chinese": "储惯响送栖厢怠食嚏伦绝",
        "d": [6],
        "g": [1],
        "id": 322,
        "j": [10],
        "l": [9],
        "length": 11,
        "pinyin": "cgxsqxdstlj",
        "q": [4],
        "s": [3, 7],
        "t": [8],
        "x": [2, 5]
    }, {
        "a": [6],
        "c": [3],
        "chinese": "甸蘸焦丛潜掖敖盐",
        "d": [0],
        "id": 323,
        "j": [2],
        "length": 8,
        "pinyin": "dzjcqyay",
        "q": [4],
        "y": [5, 7],
        "z": [1]
    }, {
        "chinese": "爽随寝鸣卧欠唐细绽嫩来",
        "id": 324,
        "l": [10],
        "length": 11,
        "m": [3],
        "n": [9],
        "pinyin": "ssqmwqtxznl",
        "q": [2, 5],
        "s": [0, 1],
        "t": [6],
        "w": [4],
        "x": [7],
        "z": [8]
    }, {
        "b": [6],
        "chinese": "意香狂毗兆形玻炕裸惯",
        "g": [9],
        "id": 325,
        "k": [2, 7],
        "l": [8],
        "length": 10,
        "p": [3],
        "pinyin": "yxkpzxbklg",
        "x": [1, 5],
        "y": [0],
        "z": [4]
    }, {
        "c": [1, 2],
        "chinese": "索出材敷刨忙焦",
        "f": [3],
        "id": 326,
        "j": [6],
        "length": 7,
        "m": [5],
        "p": [4],
        "pinyin": "sccfpmj",
        "s": [0]
    }, {
        "a": [3],
        "chinese": "臆娜镇奥讶罐系呀糯毅坟",
        "f": [10],
        "g": [5],
        "id": 327,
        "length": 11,
        "n": [1, 8],
        "pinyin": "ynzaygxynyf",
        "x": [6],
        "y": [0, 4, 7, 9],
        "z": [2]
    }, {
        "b": [3],
        "chinese": "缝至佐耙党",
        "d": [4],
        "f": [0],
        "id": 328,
        "length": 5,
        "pinyin": "fzzbd",
        "z": [1, 2]
    }, {
        "chinese": "箍涟堪割",
        "g": [0, 3],
        "id": 329,
        "k": [2],
        "l": [1],
        "length": 4,
        "pinyin": "glkg"
    }, {
        "chinese": "井米殿磕",
        "d": [2],
        "id": 330,
        "j": [0],
        "k": [3],
        "length": 4,
        "m": [1],
        "pinyin": "jmdk"
    }, {
        "b": [3],
        "chinese": "幌蛔幸饱页仕亲腥黑态",
        "h": [0, 1, 8],
        "id": 331,
        "length": 10,
        "pinyin": "hhxbysqxht",
        "q": [6],
        "s": [5],
        "t": [9],
        "x": [2, 7],
        "y": [4]
    }, {
        "c": [1, 4, 5],
        "chinese": "罐茬佃依操厕",
        "d": [2],
        "g": [0],
        "id": 332,
        "length": 6,
        "pinyin": "gcdycc",
        "y": [3]
    }, {
        "chinese": "仙醉锚番剃低询叁甄状",
        "d": [5],
        "f": [3],
        "id": 333,
        "length": 10,
        "m": [2],
        "pinyin": "xzmftdxszz",
        "s": [7],
        "t": [4],
        "x": [0, 6],
        "z": [1, 8, 9]
    }, {
        "b": [1],
        "chinese": "哄伴制颇哼种",
        "h": [0, 4],
        "id": 334,
        "length": 6,
        "p": [3],
        "pinyin": "hbzphz",
        "z": [2, 5]
    }, {
        "c": [6],
        "chinese": "责隋帕扛仔枫淳",
        "f": [5],
        "id": 335,
        "k": [3],
        "length": 7,
        "p": [2],
        "pinyin": "zspkzfc",
        "s": [1],
        "z": [0, 4]
    }, {
        "chinese": "竖航枚舜怕鸡骡砰虹倚缔",
        "d": [10],
        "h": [1, 8],
        "id": 336,
        "j": [5],
        "l": [6],
        "length": 11,
        "m": [2],
        "p": [4, 7],
        "pinyin": "shmspjlphyd",
        "s": [0, 3],
        "y": [9]
    }, {
        "chinese": "慢奄寺门",
        "id": 337,
        "length": 4,
        "m": [0, 3],
        "pinyin": "mysm",
        "s": [2],
        "y": [1]
    }, {
        "c": [2],
        "chinese": "科货惨欲躁",
        "h": [1],
        "id": 338,
        "k": [0],
        "length": 5,
        "pinyin": "khcyz",
        "y": [3],
        "z": [4]
    }, {
        "b": [0],
        "chinese": "拌贾菌赫序",
        "h": [3],
        "id": 339,
        "j": [1, 2],
        "length": 5,
        "pinyin": "bjjhx",
        "x": [4]
    }, {
        "b": [0],
        "chinese": "摆柿抨声午冕烯汰",
        "id": 340,
        "length": 8,
        "m": [5],
        "p": [2],
        "pinyin": "bspswmxt",
        "s": [1, 3],
        "t": [7],
        "w": [4],
        "x": [6]
    }, {
        "a": [1],
        "c": [2],
        "chinese": "如氨嘲罕汇魏滓眶",
        "h": [3, 4],
        "id": 341,
        "k": [7],
        "length": 8,
        "pinyin": "rachhwzk",
        "r": [0],
        "w": [5],
        "z": [6]
    }, {
        "c": [1],
        "chinese": "抒橙魏蔷",
        "id": 342,
        "length": 4,
        "pinyin": "scwq",
        "q": [3],
        "s": [0],
        "w": [2]
    }, {
        "c": [1, 3],
        "chinese": "急绰漾翠",
        "id": 343,
        "j": [0],
        "length": 4,
        "pinyin": "jcyc",
        "y": [2]
    }, {
        "chinese": "跃砚拐团脓赞",
        "g": [2],
        "id": 344,
        "length": 6,
        "n": [4],
        "pinyin": "yygtnz",
        "t": [3],
        "y": [0, 1],
        "z": [5]
    }, {
        "c": [1],
        "chinese": "呢唇赠无龚",
        "g": [4],
        "id": 345,
        "length": 5,
        "n": [0],
        "pinyin": "nczwg",
        "w": [3],
        "z": [2]
    }, {
        "chinese": "鸽渡佳呕",
        "d": [1],
        "g": [0],
        "id": 346,
        "j": [2],
        "length": 4,
        "o": [3],
        "pinyin": "gdjo"
    }, {
        "chinese": "倒倔叶鸳巡藐摘",
        "d": [0],
        "id": 347,
        "j": [1],
        "length": 7,
        "m": [5],
        "pinyin": "djyyxmz",
        "x": [4],
        "y": [2, 3],
        "z": [6]
    }, {
        "b": [3],
        "c": [2, 8],
        "chinese": "阂柬磋奔揩十龋陌绸之幼",
        "h": [0],
        "id": 348,
        "j": [1],
        "k": [4],
        "length": 11,
        "m": [7],
        "pinyin": "hjcbksqmczy",
        "q": [6],
        "s": [5],
        "y": [10],
        "z": [9]
    }, {
        "chinese": "烈猛挎炬妨上没",
        "f": [4],
        "id": 349,
        "j": [3],
        "k": [2],
        "l": [0],
        "length": 7,
        "m": [1, 6],
        "pinyin": "lmkjfsm",
        "s": [5]
    }, {
        "chinese": "棋拳矾晴",
        "f": [2],
        "id": 350,
        "length": 4,
        "pinyin": "qqfq",
        "q": [0, 1, 3]
    }, {
        "chinese": "绚堰葡中挚肇",
        "id": 351,
        "length": 6,
        "p": [2],
        "pinyin": "xypzzz",
        "x": [0],
        "y": [1],
        "z": [3, 4, 5]
    }, {
        "b": [0],
        "c": [5],
        "chinese": "饱逆益漾忽醇射释买讲",
        "h": [4],
        "id": 352,
        "j": [9],
        "length": 10,
        "m": [8],
        "n": [1],
        "pinyin": "bnyyhcssmj",
        "s": [6, 7],
        "y": [2, 3]
    }, {
        "c": [2],
        "chinese": "婉吴椿咆",
        "id": 353,
        "length": 4,
        "p": [3],
        "pinyin": "wwcp",
        "w": [0, 1]
    }, {
        "c": [0],
        "chinese": "瘁姚谷缮源胶茎幌",
        "g": [2],
        "h": [7],
        "id": 354,
        "j": [5, 6],
        "length": 8,
        "pinyin": "cygsyjjh",
        "s": [3],
        "y": [1, 4]
    }, {
        "chinese": "竖奸遏渭富",
        "e": [2],
        "f": [4],
        "id": 355,
        "j": [1],
        "length": 5,
        "pinyin": "sjewf",
        "s": [0],
        "w": [3]
    }, {
        "c": [2],
        "chinese": "选申揣炔仰",
        "g": [3],
        "id": 356,
        "length": 5,
        "pinyin": "xscgy",
        "s": [1],
        "x": [0],
        "y": [4]
    }, {
        "chinese": "奴弓抗汹睦氮猛掷",
        "d": [5],
        "g": [1],
        "id": 357,
        "k": [2],
        "length": 8,
        "m": [4, 6],
        "n": [0],
        "pinyin": "ngkxmdmz",
        "x": [3],
        "z": [7]
    }, {
        "b": [1],
        "chinese": "乡绑诸抛焦宋弗",
        "f": [6],
        "id": 358,
        "j": [4],
        "length": 7,
        "p": [3],
        "pinyin": "xbzpjsf",
        "s": [5],
        "x": [0],
        "z": [2]
    }, {
        "chinese": "棘谋钓杭昏苏豁鸡漫",
        "d": [2],
        "h": [3, 4, 6],
        "id": 359,
        "j": [0, 7],
        "length": 9,
        "m": [1, 8],
        "pinyin": "jmdhhshjm",
        "s": [5]
    }, {
        "chinese": "黍烽两际认",
        "f": [1],
        "id": 360,
        "j": [3],
        "l": [2],
        "length": 5,
        "pinyin": "sfljr",
        "r": [4],
        "s": [0]
    }, {
        "c": [3],
        "chinese": "还晚店猖",
        "d": [2],
        "h": [0],
        "id": 361,
        "length": 4,
        "pinyin": "hwdc",
        "w": [1]
    }, {
        "chinese": "你箍炭绍",
        "g": [1],
        "id": 362,
        "length": 4,
        "n": [0],
        "pinyin": "ngts",
        "s": [3],
        "t": [2]
    }, {
        "b": [4],
        "chinese": "恤换园怕柏",
        "h": [1],
        "id": 363,
        "length": 5,
        "p": [3],
        "pinyin": "xhypb",
        "x": [0],
        "y": [2]
    }, {
        "chinese": "底榷锯掩选蹬缀潦纫防泽",
        "d": [0, 5],
        "f": [9],
        "id": 364,
        "j": [2],
        "l": [7],
        "length": 11,
        "pinyin": "dqjyxdzlrfz",
        "q": [1],
        "r": [8],
        "x": [4],
        "y": [3],
        "z": [6, 10]
    }, {
        "c": [0],
        "chinese": "池舰累佳",
        "id": 365,
        "j": [1, 3],
        "l": [2],
        "length": 4,
        "pinyin": "cjlj"
    }, {
        "b": [5],
        "c": [3],
        "chinese": "顷薛糠晨矿胞寺政",
        "id": 366,
        "k": [2, 4],
        "length": 8,
        "pinyin": "qxkckbsz",
        "q": [0],
        "s": [6],
        "x": [1],
        "z": [7]
    }, {
        "c": [2],
        "chinese": "汐洛秤尔耕们哭",
        "e": [3],
        "g": [4],
        "id": 367,
        "k": [6],
        "l": [1],
        "length": 7,
        "m": [5],
        "pinyin": "xlcegmk",
        "x": [0]
    }, {
        "b": [6],
        "chinese": "味杭塑眯状纱伯坪",
        "h": [1],
        "id": 368,
        "length": 8,
        "m": [3],
        "p": [7],
        "pinyin": "whsmzsbp",
        "s": [2, 5],
        "w": [0],
        "z": [4]
    }, {
        "c": [1],
        "chinese": "育臣欣鹅",
        "e": [3],
        "id": 369,
        "length": 4,
        "pinyin": "ycxe",
        "x": [2],
        "y": [0]
    }, {
        "b": [3],
        "chinese": "盔址逐庇莉喷",
        "id": 370,
        "k": [0],
        "l": [4],
        "length": 6,
        "p": [5],
        "pinyin": "kzzblp",
        "z": [1, 2]
    }, {
        "chinese": "裕摸索叫褂",
        "g": [4],
        "id": 371,
        "j": [3],
        "length": 5,
        "m": [1],
        "pinyin": "ymsjg",
        "s": [2],
        "y": [0]
    }, {
        "b": [5],
        "c": [6],
        "chinese": "臀钟卖刽替鳖搐",
        "g": [3],
        "id": 372,
        "length": 7,
        "m": [2],
        "pinyin": "tzmgtbc",
        "t": [0, 4],
        "z": [1]
    }, {
        "chinese": "斧危功骄钧味炭",
        "f": [0],
        "g": [2],
        "id": 373,
        "j": [3, 4],
        "length": 7,
        "pinyin": "fwgjjwt",
        "t": [6],
        "w": [1, 5]
    }, {
        "chinese": "顷拳期势湘寄深",
        "id": 374,
        "j": [5],
        "length": 7,
        "pinyin": "qqqsxjs",
        "q": [0, 1, 2],
        "s": [3, 6],
        "x": [4]
    }, {
        "a": [2],
        "c": [4],
        "chinese": "护蘸爱浸策谩缕鼠狰依",
        "h": [0],
        "id": 375,
        "j": [3],
        "l": [6],
        "length": 10,
        "m": [5],
        "pinyin": "hzajcmlszy",
        "s": [7],
        "y": [9],
        "z": [1, 8]
    }, {
        "chinese": "柯臀猿档豆惶皇细罩荡",
        "d": [3, 4, 9],
        "h": [5, 6],
        "id": 376,
        "k": [0],
        "length": 10,
        "pinyin": "ktyddhhxzd",
        "t": [1],
        "x": [7],
        "y": [2],
        "z": [8]
    }, {
        "chinese": "沂句煮淌",
        "id": 377,
        "j": [1],
        "length": 4,
        "pinyin": "yjzt",
        "t": [3],
        "y": [0],
        "z": [2]
    }, {
        "b": [5, 8],
        "c": [0],
        "chinese": "聪取匠硝赔拌霹剩梆眼晴",
        "id": 378,
        "j": [2],
        "length": 11,
        "p": [4, 6],
        "pinyin": "cqjxpbpsbyq",
        "q": [1, 10],
        "s": [7],
        "x": [3],
        "y": [9]
    }, {
        "b": [7],
        "c": [0],
        "chinese": "储锹该佑致驻幕拔",
        "g": [2],
        "id": 379,
        "length": 8,
        "m": [6],
        "pinyin": "cqgyzzmb",
        "q": [1],
        "y": [3],
        "z": [4, 5]
    }, {
        "chinese": "呜蓉拽死",
        "id": 380,
        "length": 4,
        "pinyin": "wrzs",
        "r": [1],
        "s": [3],
        "w": [0],
        "z": [2]
    }, {
        "b": [1],
        "c": [2],
        "chinese": "炕卑层稳还贰革淀驾",
        "d": [7],
        "e": [5],
        "g": [6],
        "h": [4],
        "id": 381,
        "j": [8],
        "k": [0],
        "length": 9,
        "pinyin": "kbcwhegdj",
        "w": [3]
    }, {
        "b": [3],
        "chinese": "狗港趋彬",
        "g": [0, 1],
        "id": 382,
        "length": 4,
        "pinyin": "ggqb",
        "q": [2]
    }, {
        "c": [8],
        "chinese": "惧歉揍邹翼照咒札产丰",
        "f": [9],
        "id": 383,
        "j": [0],
        "length": 10,
        "pinyin": "jqzzyzzzcf",
        "q": [1],
        "y": [4],
        "z": [2, 3, 5, 6, 7]
    }, {
        "b": [0],
        "c": [4],
        "chinese": "鄙寺坑影斥",
        "id": 384,
        "k": [2],
        "length": 5,
        "pinyin": "bskyc",
        "s": [1],
        "y": [3]
    }, {
        "b": [2],
        "chinese": "宫黄憋凯瞳灸霄退鸦货居",
        "g": [0],
        "h": [1, 9],
        "id": 385,
        "j": [5, 10],
        "k": [3],
        "length": 11,
        "pinyin": "ghbktjxtyhj",
        "t": [4, 7],
        "x": [6],
        "y": [8]
    }, {
        "chinese": "喇戴郭玲讹胶覆需多纫俭",
        "d": [1, 8],
        "e": [4],
        "f": [6],
        "g": [2],
        "id": 386,
        "j": [5, 10],
        "l": [0, 3],
        "length": 11,
        "pinyin": "ldglejfxdrj",
        "r": [9],
        "x": [7]
    }, {
        "b": [3],
        "chinese": "役疑潘般",
        "id": 387,
        "length": 4,
        "p": [2],
        "pinyin": "yypb",
        "y": [0, 1]
    }, {
        "chinese": "孩翁芒浇阉",
        "h": [0],
        "id": 388,
        "j": [3],
        "length": 5,
        "m": [2],
        "pinyin": "hwmjy",
        "w": [1],
        "y": [4]
    }, {
        "b": [0],
        "chinese": "卑挥屠扎婴",
        "h": [1],
        "id": 389,
        "length": 5,
        "pinyin": "bhtzy",
        "t": [2],
        "y": [4],
        "z": [3]
    }, {
        "a": [1],
        "b": [2],
        "chinese": "拦阿拔赎",
        "id": 390,
        "l": [0],
        "length": 4,
        "pinyin": "labs",
        "s": [3]
    }, {
        "c": [8],
        "chinese": "赘侯壹襟就坊月匙抄启乍",
        "f": [5],
        "h": [1],
        "id": 391,
        "j": [3, 4],
        "length": 11,
        "pinyin": "zhyjjfyscqz",
        "q": [9],
        "s": [7],
        "y": [2, 6],
        "z": [0, 10]
    }, {
        "chinese": "贾呸访荫渣潞",
        "f": [2],
        "id": 392,
        "j": [0],
        "l": [5],
        "length": 6,
        "p": [1],
        "pinyin": "jpfyzl",
        "y": [3],
        "z": [4]
    }, {
        "c": [1],
        "chinese": "镇驰刮贫惹",
        "g": [2],
        "id": 393,
        "length": 5,
        "p": [3],
        "pinyin": "zcgpr",
        "r": [4],
        "z": [0]
    }, {
        "b": [3, 4],
        "chinese": "魂溢洲鼻豹慷戌馅壤宏",
        "h": [0, 9],
        "id": 394,
        "k": [5],
        "length": 10,
        "pinyin": "hyzbbkxxrh",
        "r": [8],
        "x": [6, 7],
        "y": [1],
        "z": [2]
    }, {
        "c": [2],
        "chinese": "摹茄池慑兆恕叔谊是疼拳",
        "id": 395,
        "j": [1],
        "length": 11,
        "m": [0],
        "pinyin": "mjcszssystq",
        "q": [10],
        "s": [3, 5, 6, 8],
        "t": [9],
        "y": [7],
        "z": [4]
    }, {
        "c": [2],
        "chinese": "揍鸳蚕署寺",
        "id": 396,
        "length": 5,
        "pinyin": "zycss",
        "s": [3, 4],
        "y": [1],
        "z": [0]
    }, {
        "chinese": "买孤媚绦霞壕泊蛰",
        "g": [1],
        "h": [5],
        "id": 397,
        "length": 8,
        "m": [0, 2],
        "p": [6],
        "pinyin": "mgmtxhpz",
        "t": [3],
        "x": [4],
        "z": [7]
    }, {
        "c": [1, 3],
        "chinese": "辱茨窑搐",
        "id": 398,
        "length": 4,
        "pinyin": "rcyc",
        "r": [0],
        "y": [2]
    }, {
        "c": [3],
        "chinese": "活艇危伺刘匙灯籍若恭剁",
        "d": [6, 10],
        "g": [9],
        "h": [0],
        "id": 399,
        "j": [7],
        "l": [4],
        "length": 11,
        "pinyin": "htwclsdjrgd",
        "r": [8],
        "s": [5],
        "t": [1],
        "w": [2]
    }, {
        "b": [2, 5],
        "chinese": "配曲膊铡微编",
        "id": 400,
        "length": 6,
        "p": [0],
        "pinyin": "pqbzwb",
        "q": [1],
        "w": [4],
        "z": [3]
    }, {
        "chinese": "喉若手冒怎锁",
        "h": [0],
        "id": 401,
        "length": 6,
        "m": [3],
        "pinyin": "hrsmzs",
        "r": [1],
        "s": [2, 5],
        "z": [4]
    }, {
        "a": [9],
        "b": [4],
        "chinese": "溯方扎沼膘涧概夹氮奥雍",
        "d": [8],
        "f": [1],
        "g": [6],
        "id": 402,
        "j": [5, 7],
        "length": 11,
        "pinyin": "sfzzbjgjday",
        "s": [0],
        "y": [10],
        "z": [2, 3]
    }, {
        "chinese": "渝羹能费碉",
        "d": [4],
        "f": [3],
        "g": [1],
        "id": 403,
        "length": 5,
        "n": [2],
        "pinyin": "ygnfd",
        "y": [0]
    }, {
        "chinese": "式始孔慑漏液找浓",
        "id": 404,
        "k": [2],
        "l": [4],
        "length": 8,
        "n": [7],
        "pinyin": "sskslyzn",
        "s": [0, 1, 3],
        "y": [5],
        "z": [6]
    }, {
        "chinese": "嗽寞聊氓奖厉粤徐亮",
        "id": 405,
        "j": [4],
        "l": [2, 5, 8],
        "length": 9,
        "m": [1, 3],
        "pinyin": "smlmjlyxl",
        "s": [0],
        "x": [7],
        "y": [6]
    }, {
        "b": [2],
        "c": [1],
        "chinese": "钾幢杯销彤蔚气单衅炭铅",
        "d": [7],
        "id": 406,
        "j": [0],
        "length": 11,
        "pinyin": "jcbxtwqdxtq",
        "q": [6, 10],
        "t": [4, 9],
        "w": [5],
        "x": [3, 8]
    }, {
        "chinese": "默疙穆咬黑纳南硷伙磺",
        "g": [1],
        "h": [4, 8, 9],
        "id": 407,
        "j": [7],
        "length": 10,
        "m": [0, 2],
        "n": [5, 6],
        "pinyin": "mgmyhnnjhh",
        "y": [3]
    }, {
        "chinese": "肯伎暇晰翘诉煞",
        "id": 408,
        "j": [1],
        "k": [0],
        "length": 7,
        "pinyin": "kjxxqss",
        "q": [4],
        "s": [5, 6],
        "x": [2, 3]
    }, {
        "c": [1, 4],
        "chinese": "牺村栖虹惩孤砖皱丝赡茸",
        "g": [5],
        "h": [3],
        "id": 409,
        "length": 11,
        "pinyin": "xcqhcgzzssr",
        "q": [2],
        "r": [10],
        "s": [8, 9],
        "x": [0],
        "z": [6, 7]
    }, {
        "chinese": "吐祥傈卵研祖汲猾宿",
        "h": [7],
        "id": 410,
        "j": [6],
        "l": [2, 3],
        "length": 9,
        "pinyin": "txllyzjhs",
        "s": [8],
        "t": [0],
        "x": [1],
        "y": [4],
        "z": [5]
    }, {
        "c": [1],
        "chinese": "已橱记幅淖沁擒维课",
        "f": [3],
        "id": 411,
        "j": [2],
        "k": [8],
        "length": 9,
        "n": [4],
        "pinyin": "ycjfnqqwk",
        "q": [5, 6],
        "w": [7],
        "y": [0]
    }, {
        "c": [3],
        "chinese": "疗混贴炽激",
        "h": [1],
        "id": 412,
        "j": [4],
        "l": [0],
        "length": 5,
        "pinyin": "lhtcj",
        "t": [2]
    }, {
        "c": [9],
        "chinese": "昔狮屑蹋剐斤烟幽剁惭溺",
        "d": [8],
        "g": [4],
        "id": 413,
        "j": [5],
        "length": 11,
        "n": [10],
        "pinyin": "xsxtgjyydcn",
        "s": [1],
        "t": [3],
        "x": [0, 2],
        "y": [6, 7]
    }, {
        "chinese": "同路龋抉岛卿稽",
        "d": [4],
        "id": 414,
        "j": [3, 6],
        "l": [1],
        "length": 7,
        "pinyin": "tlqjdqj",
        "q": [2, 5],
        "t": [0]
    }, {
        "a": [3, 4],
        "chinese": "径丫默熬氨予",
        "id": 415,
        "j": [0],
        "length": 6,
        "m": [2],
        "pinyin": "jymaay",
        "y": [1, 5]
    }, {
        "chinese": "塌舟舞记纵嗽敬肺矢攀碰",
        "f": [7],
        "id": 416,
        "j": [3, 6],
        "length": 11,
        "p": [9, 10],
        "pinyin": "tzwjzsjfspp",
        "s": [5, 8],
        "t": [0],
        "w": [2],
        "z": [1, 4]
    }, {
        "b": [4],
        "chinese": "红嫩寄劣绊射哩愈",
        "h": [0],
        "id": 417,
        "j": [2],
        "l": [3, 6],
        "length": 8,
        "n": [1],
        "pinyin": "hnjlbsly",
        "s": [5],
        "y": [7]
    }, {
        "a": [8],
        "b": [5],
        "chinese": "希恿镀渝诌拌泼邹蔼粒判",
        "d": [2],
        "id": 418,
        "l": [9],
        "length": 11,
        "p": [6, 10],
        "pinyin": "xydyzbpzalp",
        "x": [0],
        "y": [1, 3],
        "z": [4, 7]
    }, {
        "a": [8],
        "c": [4],
        "chinese": "师降配稼蚕宁饥待埃冈",
        "d": [7],
        "g": [9],
        "id": 419,
        "j": [1, 3, 6],
        "length": 10,
        "n": [5],
        "p": [2],
        "pinyin": "sjpjcnjdag",
        "s": [0]
    }, {
        "c": [3],
        "chinese": "挞牛腋掣",
        "id": 420,
        "length": 4,
        "n": [1],
        "pinyin": "tnyc",
        "t": [0],
        "y": [2]
    }, {
        "b": [2, 9],
        "chinese": "皱竟跋状头郁衡栽瑚捌卵",
        "h": [6, 8],
        "id": 421,
        "j": [1],
        "l": [10],
        "length": 11,
        "pinyin": "zjbztyhzhbl",
        "t": [4],
        "y": [5],
        "z": [0, 3, 7]
    }, {
        "b": [1, 4],
        "chinese": "痞箔毯苇碧讽四",
        "f": [5],
        "id": 422,
        "length": 7,
        "p": [0],
        "pinyin": "pbtwbfs",
        "s": [6],
        "t": [2],
        "w": [3]
    }, {
        "c": [1],
        "chinese": "宵错纽亿挞狄殊",
        "d": [5],
        "id": 423,
        "length": 7,
        "n": [2],
        "pinyin": "xcnytds",
        "s": [6],
        "t": [4],
        "x": [0],
        "y": [3]
    }, {
        "b": [0, 4],
        "chinese": "扁师克迫佰缆鹿荫",
        "id": 424,
        "k": [2],
        "l": [5, 6],
        "length": 8,
        "p": [3],
        "pinyin": "bskpblly",
        "s": [1],
        "y": [7]
    }, {
        "b": [3],
        "chinese": "簧伟蔓渤舔烽筏喷低",
        "d": [8],
        "f": [5, 6],
        "h": [0],
        "id": 425,
        "length": 9,
        "m": [2],
        "p": [7],
        "pinyin": "hwmbtffpd",
        "t": [4],
        "w": [1]
    }, {
        "chinese": "钦远立琵",
        "id": 426,
        "l": [2],
        "length": 4,
        "p": [3],
        "pinyin": "qylp",
        "q": [0],
        "y": [1]
    }, {
        "chinese": "茄凳泞娥恭或料义",
        "d": [1],
        "e": [3],
        "g": [4],
        "h": [5],
        "id": 427,
        "j": [0],
        "l": [6],
        "length": 8,
        "n": [2],
        "pinyin": "jdneghly",
        "y": [7]
    }, {
        "c": [2],
        "chinese": "先茄春猩",
        "id": 428,
        "j": [1],
        "length": 4,
        "pinyin": "xjcx",
        "x": [0, 3]
    }, {
        "c": [3],
        "chinese": "帐扬劝搀句掏锐俱凋榨",
        "d": [8],
        "id": 429,
        "j": [4, 7],
        "length": 10,
        "pinyin": "zyqcjtrjdz",
        "q": [2],
        "r": [6],
        "t": [5],
        "y": [1],
        "z": [0, 9]
    }, {
        "c": [10],
        "chinese": "蛔娜瞎猫攒剑卿点井母擦",
        "d": [7],
        "h": [0],
        "id": 430,
        "j": [5, 8],
        "length": 11,
        "m": [3, 9],
        "n": [1],
        "pinyin": "hnxmzjqdjmc",
        "q": [6],
        "x": [2],
        "z": [4]
    }, {
        "chinese": "雪呛十锥",
        "id": 431,
        "length": 4,
        "pinyin": "xqsz",
        "q": [1],
        "s": [2],
        "x": [0],
        "z": [3]
    }, {
        "chinese": "自失砷哇",
        "id": 432,
        "length": 4,
        "pinyin": "zssw",
        "s": [1, 2],
        "w": [3],
        "z": [0]
    }, {
        "b": [0],
        "chinese": "编物钉赴",
        "d": [2],
        "f": [3],
        "id": 433,
        "length": 4,
        "pinyin": "bwdf",
        "w": [1]
    }, {
        "c": [2],
        "chinese": "饰丰畜而尼馁书峦故馒",
        "e": [3],
        "f": [1],
        "g": [8],
        "id": 434,
        "l": [7],
        "length": 10,
        "m": [9],
        "n": [4, 5],
        "pinyin": "sfcennslgm",
        "s": [0, 6]
    }, {
        "chinese": "恨稼仟坞",
        "h": [0],
        "id": 435,
        "j": [1],
        "length": 4,
        "pinyin": "hjqw",
        "q": [2],
        "w": [3]
    }, {
        "b": [8],
        "c": [3],
        "chinese": "浪既鼓城绦阮模译伯涎优",
        "g": [2],
        "id": 436,
        "j": [1],
        "l": [0],
        "length": 11,
        "m": [6],
        "pinyin": "ljgctrmybxy",
        "r": [5],
        "t": [4],
        "x": [9],
        "y": [7, 10]
    }, {
        "c": [3, 4, 5],
        "chinese": "邹脱绢炊忱簇",
        "id": 437,
        "j": [2],
        "length": 6,
        "pinyin": "ztjccc",
        "t": [1],
        "z": [0]
    }, {
        "b": [3],
        "c": [2],
        "chinese": "呕擎诧暴到",
        "d": [4],
        "id": 438,
        "length": 5,
        "o": [0],
        "pinyin": "oqcbd",
        "q": [1]
    }, {
        "b": [6, 9],
        "c": [4, 7],
        "chinese": "抓竹柯郧灿峭钡绰啄罢",
        "id": 439,
        "k": [2],
        "length": 10,
        "pinyin": "zzkycqbczb",
        "q": [5],
        "y": [3],
        "z": [0, 1, 8]
    }, {
        "a": [0],
        "chinese": "敖讣纲龚搜训呕昼",
        "f": [1],
        "g": [2, 3],
        "id": 440,
        "length": 8,
        "o": [6],
        "pinyin": "afggsxoz",
        "s": [4],
        "x": [5],
        "z": [7]
    }, {
        "b": [5],
        "chinese": "腆硷劝坷丫拔蓉偶勘瞒",
        "id": 441,
        "j": [1],
        "k": [3, 8],
        "length": 10,
        "m": [9],
        "o": [7],
        "pinyin": "tjqkybrokm",
        "q": [2],
        "r": [6],
        "t": [0],
        "y": [4]
    }, {
        "c": [4],
        "chinese": "费滥露量巢",
        "f": [0],
        "id": 442,
        "l": [1, 2, 3],
        "length": 5,
        "pinyin": "flllc"
    }, {
        "chinese": "肤彝庭续卓尔钒",
        "e": [5],
        "f": [0, 6],
        "id": 443,
        "length": 7,
        "pinyin": "fytxzef",
        "t": [2],
        "x": [3],
        "y": [1],
        "z": [4]
    }, {
        "c": [1, 9],
        "chinese": "麦揣汕牟督达蝇晤栓谗",
        "d": [4, 5],
        "id": 444,
        "length": 10,
        "m": [0, 3],
        "pinyin": "mcsmddywsc",
        "s": [2, 8],
        "w": [7],
        "y": [6]
    }, {
        "b": [3],
        "chinese": "纤虾拾臂甘瓤扔入禾阑",
        "g": [4],
        "h": [8],
        "id": 445,
        "l": [9],
        "length": 10,
        "pinyin": "xxsbgrrrhl",
        "r": [5, 6, 7],
        "s": [2],
        "x": [0, 1]
    }, {
        "b": [1],
        "c": [6],
        "chinese": "铀弊账哈划沛诧絮狂握撂",
        "h": [3, 4],
        "id": 446,
        "k": [8],
        "l": [10],
        "length": 11,
        "p": [5],
        "pinyin": "ybzhhpcxkwl",
        "w": [9],
        "x": [7],
        "y": [0],
        "z": [2]
    }, {
        "chinese": "瞄趣筛睛蔚姚呕",
        "id": 447,
        "j": [3],
        "length": 7,
        "m": [0],
        "o": [6],
        "pinyin": "mqsjwyo",
        "q": [1],
        "s": [2],
        "w": [4],
        "y": [5]
    }, {
        "b": [5],
        "c": [9],
        "chinese": "挎根弥钾鞋逼馅登逻窜肪",
        "d": [7],
        "f": [10],
        "g": [1],
        "id": 448,
        "j": [3],
        "k": [0],
        "l": [8],
        "length": 11,
        "m": [2],
        "pinyin": "kgmjxbxdlcf",
        "x": [4, 6]
    }, {
        "c": [0],
        "chinese": "次大圆托惊卫",
        "d": [1],
        "id": 449,
        "j": [4],
        "length": 6,
        "pinyin": "cdytjw",
        "t": [3],
        "w": [5],
        "y": [2]
    }, {
        "c": [6],
        "chinese": "譬缺温碱述娇弛",
        "id": 450,
        "j": [3, 5],
        "length": 7,
        "p": [0],
        "pinyin": "pqwjsjc",
        "q": [1],
        "s": [4],
        "w": [2]
    }, {
        "c": [6],
        "chinese": "锨友蠕灰墨赫城影恢请缮",
        "h": [3, 5, 8],
        "id": 451,
        "length": 11,
        "m": [4],
        "pinyin": "xyrhmhcyhqs",
        "q": [9],
        "r": [2],
        "s": [10],
        "x": [0],
        "y": [1, 7]
    }, {
        "chinese": "抡量秀疽",
        "id": 452,
        "j": [3],
        "l": [0, 1],
        "length": 4,
        "pinyin": "llxj",
        "x": [2]
    }, {
        "chinese": "臻钨棚增尔就妻羞",
        "e": [4],
        "id": 453,
        "j": [5],
        "length": 8,
        "p": [2],
        "pinyin": "zwpzejqx",
        "q": [6],
        "w": [1],
        "x": [7],
        "z": [0, 3]
    }, {
        "chinese": "诸陇写衅捎垫",
        "d": [5],
        "id": 454,
        "l": [1],
        "length": 6,
        "pinyin": "zlxxsd",
        "s": [4],
        "x": [2, 3],
        "z": [0]
    }, {
        "b": [1],
        "c": [6],
        "chinese": "夹疤渊李榨孽舱粉",
        "f": [7],
        "id": 455,
        "j": [0],
        "l": [3],
        "length": 8,
        "n": [5],
        "pinyin": "jbylzncf",
        "y": [2],
        "z": [4]
    }, {
        "a": [4],
        "b": [6],
        "chinese": "铆矛醒犊懊致鞭汉她眨栅",
        "d": [3],
        "h": [7],
        "id": 456,
        "length": 11,
        "m": [0, 1],
        "pinyin": "mmxdazbhtzz",
        "t": [8],
        "x": [2],
        "z": [5, 9, 10]
    }, {
        "b": [2],
        "c": [1, 8],
        "chinese": "鱼粗辈夸专铭榴刘郴",
        "id": 457,
        "k": [3],
        "l": [6, 7],
        "length": 9,
        "m": [5],
        "pinyin": "ycbkzmllc",
        "y": [0],
        "z": [4]
    }, {
        "chinese": "请育幅税柬个戌番粉",
        "f": [2, 7, 8],
        "g": [5],
        "id": 458,
        "j": [4],
        "length": 9,
        "pinyin": "qyfsjgxff",
        "q": [0],
        "s": [3],
        "x": [6],
        "y": [1]
    }, {
        "c": [2, 7],
        "chinese": "脊继矗造捂爬鸳册芥纤抡",
        "id": 459,
        "j": [0, 1, 8],
        "l": [10],
        "length": 11,
        "p": [5],
        "pinyin": "jjczwpycjxl",
        "w": [4],
        "x": [9],
        "y": [6],
        "z": [3]
    }, {
        "chinese": "竭胯宛宪瘸鹊氮口硒泳",
        "d": [6],
        "id": 460,
        "j": [0],
        "k": [1, 7],
        "length": 10,
        "pinyin": "jkwxqqdkxy",
        "q": [4, 5],
        "w": [2],
        "x": [3, 8],
        "y": [9]
    }, {
        "c": [1],
        "chinese": "奎谗俯蔑汪饰伪搂搪滩寻",
        "f": [2],
        "id": 461,
        "k": [0],
        "l": [7],
        "length": 11,
        "m": [3],
        "pinyin": "kcfmwswlttx",
        "s": [5],
        "t": [8, 9],
        "w": [4, 6],
        "x": [10]
    }, {
        "c": [2],
        "chinese": "祭狄豺炕铺泡",
        "d": [1],
        "id": 462,
        "j": [0],
        "k": [3],
        "length": 6,
        "p": [4, 5],
        "pinyin": "jdckpp"
    }, {
        "b": [3],
        "chinese": "留燥品本裔辑渊",
        "id": 463,
        "j": [5],
        "l": [0],
        "length": 7,
        "p": [2],
        "pinyin": "lzpbyjy",
        "y": [4, 6],
        "z": [1]
    }, {
        "b": [10],
        "chinese": "最锑纳需昏泉浅菊翰冤拔",
        "h": [4, 8],
        "id": 464,
        "j": [7],
        "length": 11,
        "n": [2],
        "pinyin": "ztnxhqqjhyb",
        "q": [5, 6],
        "t": [1],
        "x": [3],
        "y": [9],
        "z": [0]
    }, {
        "b": [1, 3, 4],
        "chinese": "朋表氟靶跋势",
        "f": [2],
        "id": 465,
        "length": 6,
        "p": [0],
        "pinyin": "pbfbbs",
        "s": [5]
    }, {
        "c": [3, 7],
        "chinese": "茹酮驭瘁勉吼豁川",
        "h": [5, 6],
        "id": 466,
        "length": 8,
        "m": [4],
        "pinyin": "rtycmhhc",
        "r": [0],
        "t": [1],
        "y": [2]
    }, {
        "c": [4, 6],
        "chinese": "摘薯骤叠曹失搓",
        "d": [3],
        "id": 467,
        "length": 7,
        "pinyin": "zszdcsc",
        "s": [1, 5],
        "z": [0, 2]
    }, {
        "chinese": "稼塔赠嫡瘫隔潍",
        "d": [3],
        "g": [5],
        "id": 468,
        "j": [0],
        "length": 7,
        "pinyin": "jtzdtgw",
        "t": [1, 4],
        "w": [6],
        "z": [2]
    }, {
        "b": [4],
        "c": [1],
        "chinese": "呵愁药沾疤",
        "h": [0],
        "id": 469,
        "length": 5,
        "pinyin": "hcyzb",
        "y": [2],
        "z": [3]
    }, {
        "c": [4],
        "chinese": "暮酥蚀韦刺颗缔役蛹肖",
        "d": [6],
        "id": 470,
        "k": [5],
        "length": 10,
        "m": [0],
        "pinyin": "msswckdyyx",
        "s": [1, 2],
        "w": [3],
        "x": [9],
        "y": [7, 8]
    }, {
        "c": [5],
        "chinese": "漫乃低凋迢撤忧",
        "d": [2, 3],
        "id": 471,
        "length": 7,
        "m": [0],
        "n": [1],
        "pinyin": "mnddtcy",
        "t": [4],
        "y": [6]
    }, {
        "c": [4],
        "chinese": "傈窃秘勋撮稳棱",
        "id": 472,
        "l": [0, 6],
        "length": 7,
        "m": [2],
        "pinyin": "lqmxcwl",
        "q": [1],
        "w": [5],
        "x": [3]
    }, {
        "c": [1],
        "chinese": "乾促鹤加",
        "h": [2],
        "id": 473,
        "j": [3],
        "length": 4,
        "pinyin": "qchj",
        "q": [0]
    }, {
        "chinese": "躺皇戚琅环咸直由架惊",
        "h": [1, 4],
        "id": 474,
        "j": [8, 9],
        "l": [3],
        "length": 10,
        "pinyin": "thqlhxzyjj",
        "q": [2],
        "t": [0],
        "x": [5],
        "y": [7],
        "z": [6]
    }, {
        "c": [4],
        "chinese": "过紧骚卯晨隶纂",
        "g": [0],
        "id": 475,
        "j": [1],
        "l": [5],
        "length": 7,
        "m": [3],
        "pinyin": "gjsmclz",
        "s": [2],
        "z": [6]
    }, {
        "c": [5, 8],
        "chinese": "胃篙清咀柒诚堵级糙蹋鲜",
        "d": [6],
        "g": [1],
        "id": 476,
        "j": [3, 7],
        "length": 11,
        "pinyin": "wgqjqcdjctx",
        "q": [2, 4],
        "t": [9],
        "w": [0],
        "x": [10]
    }, {
        "b": [0],
        "c": [1],
        "chinese": "坝伺同醚环掌涝",
        "h": [4],
        "id": 477,
        "l": [6],
        "length": 7,
        "m": [3],
        "pinyin": "bctmhzl",
        "t": [2],
        "z": [5]
    }, {
        "b": [2],
        "chinese": "罚叔背癣",
        "f": [0],
        "id": 478,
        "length": 4,
        "pinyin": "fsbx",
        "s": [1],
        "x": [3]
    }, {
        "chinese": "灸吏忧羽",
        "id": 479,
        "j": [0],
        "l": [1],
        "length": 4,
        "pinyin": "jlyy",
        "y": [2, 3]
    }, {
        "chinese": "锨譬剃税兼茄",
        "id": 480,
        "j": [4, 5],
        "length": 6,
        "p": [1],
        "pinyin": "xptsjj",
        "s": [3],
        "t": [2],
        "x": [0]
    }, {
        "chinese": "邮缨吊拣价谦",
        "d": [2],
        "id": 481,
        "j": [3, 4],
        "length": 6,
        "pinyin": "yydjjq",
        "q": [5],
        "y": [0, 1]
    }, {
        "c": [3],
        "chinese": "隙疟抡椎",
        "id": 482,
        "l": [2],
        "length": 4,
        "n": [1],
        "pinyin": "xnlc",
        "x": [0]
    }, {
        "chinese": "票兑坏规阑荒湿乍永",
        "d": [1],
        "g": [3],
        "h": [2, 5],
        "id": 483,
        "l": [4],
        "length": 9,
        "p": [0],
        "pinyin": "pdhglhszy",
        "s": [6],
        "y": [8],
        "z": [7]
    }, {
        "c": [7],
        "chinese": "慰翁弄升趴瞩内巢秩",
        "id": 484,
        "length": 9,
        "n": [2, 6],
        "p": [4],
        "pinyin": "wwnspzncz",
        "s": [3],
        "w": [0, 1],
        "z": [5, 8]
    }, {
        "c": [0],
        "chinese": "草区惋耘则何眉矫滦感",
        "g": [9],
        "h": [5],
        "id": 485,
        "j": [7],
        "l": [8],
        "length": 10,
        "m": [6],
        "pinyin": "cqwyzhmjlg",
        "q": [1],
        "w": [2],
        "y": [3],
        "z": [4]
    }, {
        "a": [1],
        "chinese": "互唉取动植",
        "d": [3],
        "h": [0],
        "id": 486,
        "length": 5,
        "pinyin": "haqdz",
        "q": [2],
        "z": [4]
    }, {
        "chinese": "窘紊魔朱封痰浓理",
        "f": [4],
        "id": 487,
        "j": [0],
        "l": [7],
        "length": 8,
        "m": [2],
        "n": [6],
        "pinyin": "jwmzftnl",
        "t": [5],
        "w": [1],
        "z": [3]
    }, {
        "chinese": "万鬃延焉袁糕",
        "g": [5],
        "id": 488,
        "length": 6,
        "pinyin": "wzyyyg",
        "w": [0],
        "y": [2, 3, 4],
        "z": [1]
    }, {
        "b": [4, 8],
        "chinese": "小昔据优蚌价辉旦迸索",
        "d": [7],
        "h": [6],
        "id": 489,
        "j": [2, 5],
        "length": 10,
        "pinyin": "xxjybjhdbs",
        "s": [9],
        "x": [0, 1],
        "y": [3]
    }, {
        "chinese": "迭判摸扑十职事",
        "d": [0],
        "id": 490,
        "length": 7,
        "m": [2],
        "p": [1, 3],
        "pinyin": "dpmpszs",
        "s": [4, 6],
        "z": [5]
    }, {
        "chinese": "架启吐菏艺",
        "h": [3],
        "id": 491,
        "j": [0],
        "length": 5,
        "pinyin": "jqthy",
        "q": [1],
        "t": [2],
        "y": [4]
    }, {
        "chinese": "枣灌洪葡",
        "g": [1],
        "h": [2],
        "id": 492,
        "length": 4,
        "p": [3],
        "pinyin": "zghp",
        "z": [0]
    }, {
        "c": [3],
        "chinese": "拈昨剖唇焰卖",
        "id": 493,
        "length": 6,
        "m": [5],
        "n": [0],
        "p": [2],
        "pinyin": "nzpcym",
        "y": [4],
        "z": [1]
    }, {
        "b": [4],
        "chinese": "哥蝴泥埂憋痞娟提垣",
        "g": [0, 3],
        "h": [1],
        "id": 494,
        "j": [6],
        "length": 9,
        "n": [2],
        "p": [5],
        "pinyin": "ghngbpjty",
        "t": [7],
        "y": [8]
    }, {
        "chinese": "钟邪坚神埋",
        "id": 495,
        "j": [2],
        "length": 5,
        "m": [4],
        "pinyin": "zxjsm",
        "s": [3],
        "x": [1],
        "z": [0]
    }, {
        "chinese": "剑刨故瓦",
        "g": [2],
        "id": 496,
        "j": [0],
        "length": 4,
        "p": [1],
        "pinyin": "jpgw",
        "w": [3]
    }, {
        "b": [0, 1],
        "chinese": "版扒涪肢遇缉咒汗",
        "f": [2],
        "h": [7],
        "id": 497,
        "j": [5],
        "length": 8,
        "pinyin": "bbfzyjzh",
        "y": [4],
        "z": [3, 6]
    }, {
        "c": [5],
        "chinese": "坍孪污可蛔匆",
        "h": [4],
        "id": 498,
        "k": [3],
        "l": [1],
        "length": 6,
        "pinyin": "tlwkhc",
        "t": [0],
        "w": [2]
    }, {
        "b": [7],
        "c": [3, 8],
        "chinese": "龚跌藩阐芋埋图博辰剿",
        "d": [1],
        "f": [2],
        "g": [0],
        "id": 499,
        "j": [9],
        "length": 10,
        "m": [5],
        "pinyin": "gdfcymtbcj",
        "t": [6],
        "y": [4]
    }, {
        "a": [5],
        "b": [2],
        "chinese": "嗅穴倍菲毡碍",
        "f": [3],
        "id": 500,
        "length": 6,
        "pinyin": "xxbfza",
        "x": [0, 1],
        "z": [4]
    }, {
        "chinese": "翰聂屎脚夹帅",
        "h": [0],
        "id": 501,
        "j": [3, 4],
        "length": 6,
        "n": [1],
        "pinyin": "hnsjjs",
        "s": [2, 5]
    }, {
        "chinese": "殆怨棕憨吨丁妒",
        "d": [0, 4, 5, 6],
        "h": [3],
        "id": 502,
        "length": 7,
        "pinyin": "dyzhddd",
        "y": [1],
        "z": [2]
    }, {
        "chinese": "咋憾位缝掐囊",
        "f": [3],
        "h": [1],
        "id": 503,
        "length": 6,
        "n": [5],
        "pinyin": "zhwfqn",
        "q": [4],
        "w": [2],
        "z": [0]
    }, {
        "b": [5],
        "chinese": "莲法马孰言鄙",
        "f": [1],
        "id": 504,
        "l": [0],
        "length": 6,
        "m": [2],
        "pinyin": "lfmsyb",
        "s": [3],
        "y": [4]
    }, {
        "a": [2],
        "c": [1],
        "chinese": "栖喘隘杭扰氯墟",
        "h": [3],
        "id": 505,
        "l": [5],
        "length": 7,
        "pinyin": "qcahrlx",
        "q": [0],
        "r": [4],
        "x": [6]
    }, {
        "b": [1],
        "chinese": "斜傍酿吮散纵某姥憎纪洛",
        "id": 506,
        "j": [9],
        "l": [7, 10],
        "length": 11,
        "m": [6],
        "n": [2],
        "pinyin": "xbnsszmlzjl",
        "s": [3, 4],
        "x": [0],
        "z": [5, 8]
    }, {
        "b": [1],
        "chinese": "未斌西酞械恬诗尖脓组",
        "id": 507,
        "j": [7],
        "length": 10,
        "n": [8],
        "pinyin": "wbxtxtsjnz",
        "s": [6],
        "t": [3, 5],
        "w": [0],
        "x": [2, 4],
        "z": [9]
    }, {
        "chinese": "居绢吁澡隙霞绘魂娘牵鲸",
        "h": [6, 7],
        "id": 508,
        "j": [0, 1, 10],
        "length": 11,
        "n": [8],
        "pinyin": "jjxzxxhhnqj",
        "q": [9],
        "x": [2, 4, 5],
        "z": [3]
    }, {
        "b": [2, 6],
        "chinese": "痈砂弊迈缄馒疤寻售臃",
        "id": 509,
        "j": [4],
        "length": 10,
        "m": [3, 5],
        "pinyin": "ysbmjmbxsy",
        "s": [1, 8],
        "x": [7],
        "y": [0, 9]
    }, {
        "chinese": "枣潞二开曝峭套溶掠",
        "e": [2],
        "id": 510,
        "k": [3],
        "l": [1, 8],
        "length": 9,
        "p": [4],
        "pinyin": "zlekpqtrl",
        "q": [5],
        "r": [7],
        "t": [6],
        "z": [0]
    }, {
        "c": [0],
        "chinese": "仓肘匣戴贯碎陌腑",
        "d": [3],
        "f": [7],
        "g": [4],
        "id": 511,
        "length": 8,
        "m": [6],
        "pinyin": "czxdgsmf",
        "s": [5],
        "x": [2],
        "z": [1]
    }, {
        "b": [2],
        "chinese": "幼硕便缝",
        "f": [3],
        "id": 512,
        "length": 4,
        "pinyin": "ysbf",
        "s": [1],
        "y": [0]
    }, {
        "c": [2],
        "chinese": "乃捧扯义锐",
        "id": 513,
        "length": 5,
        "n": [0],
        "p": [1],
        "pinyin": "npcyr",
        "r": [4],
        "y": [3]
    }, {
        "chinese": "豆乎瞩否俭汤乱",
        "d": [0],
        "f": [3],
        "h": [1],
        "id": 514,
        "j": [4],
        "l": [6],
        "length": 7,
        "pinyin": "dhzfjtl",
        "t": [5],
        "z": [2]
    }, {
        "b": [0],
        "chinese": "棒酗浪伸筒焰怕屈逗",
        "d": [8],
        "id": 515,
        "l": [2],
        "length": 9,
        "p": [6],
        "pinyin": "bxlstypqd",
        "q": [7],
        "s": [3],
        "t": [4],
        "x": [1],
        "y": [5]
    }, {
        "chinese": "油眨指诵仁尉识颈",
        "id": 516,
        "j": [7],
        "length": 8,
        "pinyin": "yzzsrwsj",
        "r": [4],
        "s": [3, 6],
        "w": [5],
        "y": [0],
        "z": [1, 2]
    }, {
        "b": [1],
        "c": [3, 4],
        "chinese": "狡扮陕测滁影",
        "id": 517,
        "j": [0],
        "length": 6,
        "pinyin": "jbsccy",
        "s": [2],
        "y": [5]
    }, {
        "c": [0],
        "chinese": "翅撬使址巍凝黄单庭",
        "d": [7],
        "h": [6],
        "id": 518,
        "length": 9,
        "n": [5],
        "pinyin": "cqszwnhdt",
        "q": [1],
        "s": [2],
        "t": [8],
        "w": [4],
        "z": [3]
    }, {
        "b": [1],
        "c": [3],
        "chinese": "朗抱油材",
        "id": 519,
        "l": [0],
        "length": 4,
        "pinyin": "lbyc",
        "y": [2]
    }, {
        "c": [6, 9],
        "chinese": "胆宫辱隧纸临层瓜袱惩务",
        "d": [0],
        "f": [8],
        "g": [1, 7],
        "id": 520,
        "l": [5],
        "length": 11,
        "pinyin": "dgrszlcgfcw",
        "r": [2],
        "s": [3],
        "w": [10],
        "z": [4]
    }, {
        "c": [7],
        "chinese": "桐抉须杀劫范脓闯腾胃",
        "f": [5],
        "id": 521,
        "j": [1, 4],
        "length": 10,
        "n": [6],
        "pinyin": "tjxsjfnctw",
        "s": [3],
        "t": [0, 8],
        "w": [9],
        "x": [2]
    }, {
        "c": [10],
        "chinese": "菇岿逢牧雨陌犬妮通刀橱",
        "d": [9],
        "f": [2],
        "g": [0],
        "id": 522,
        "k": [1],
        "length": 11,
        "m": [3, 5],
        "n": [7],
        "pinyin": "gkfmymqntdc",
        "q": [6],
        "t": [8],
        "y": [4]
    }, {
        "chinese": "扶拂诣酥",
        "f": [0, 1],
        "id": 523,
        "length": 4,
        "pinyin": "ffys",
        "s": [3],
        "y": [2]
    }, {
        "c": [0],
        "chinese": "雏另先旧富低发",
        "d": [5],
        "f": [4, 6],
        "id": 524,
        "j": [3],
        "l": [1],
        "length": 7,
        "pinyin": "clxjfdf",
        "x": [2]
    }, {
        "chinese": "坊理珊俘吏随棋蛋叶哉授",
        "d": [7],
        "f": [0, 3],
        "id": 525,
        "l": [1, 4],
        "length": 11,
        "pinyin": "flsflsqdyzs",
        "q": [6],
        "s": [2, 5, 10],
        "y": [8],
        "z": [9]
    }, {
        "b": [4, 5],
        "chinese": "锑秆室哇保把淡眨",
        "d": [6],
        "g": [1],
        "id": 526,
        "length": 8,
        "pinyin": "tgswbbdz",
        "s": [2],
        "t": [0],
        "w": [3],
        "z": [7]
    }, {
        "a": [7],
        "c": [3],
        "chinese": "羽伎岗赤毯伍抨昂捣裂弧",
        "d": [8],
        "g": [2],
        "h": [10],
        "id": 527,
        "j": [1],
        "l": [9],
        "length": 11,
        "p": [6],
        "pinyin": "yjgctwpadlh",
        "t": [4],
        "w": [5],
        "y": [0]
    }, {
        "c": [0],
        "chinese": "岔赖鹅究札狐",
        "e": [2],
        "h": [5],
        "id": 528,
        "j": [3],
        "l": [1],
        "length": 6,
        "pinyin": "clejzh",
        "z": [4]
    }, {
        "chinese": "汇辱哩遵",
        "h": [0],
        "id": 529,
        "l": [2],
        "length": 4,
        "pinyin": "hrlz",
        "r": [1],
        "z": [3]
    }, {
        "chinese": "感葡球淫柞",
        "g": [0],
        "id": 530,
        "length": 5,
        "p": [1],
        "pinyin": "gpqyz",
        "q": [2],
        "y": [3],
        "z": [4]
    }, {
        "chinese": "龚街首岗文弟彦",
        "d": [5],
        "g": [0, 3],
        "id": 531,
        "j": [1],
        "length": 7,
        "pinyin": "gjsgwdy",
        "s": [2],
        "w": [4],
        "y": [6]
    }, {
        "chinese": "炔懈犬骨原先忌",
        "g": [0, 3],
        "id": 532,
        "j": [6],
        "length": 7,
        "pinyin": "gxqgyxj",
        "q": [2],
        "x": [1, 5],
        "y": [4]
    }, {
        "chinese": "绳日氛清淫慑挡",
        "d": [6],
        "f": [2],
        "id": 533,
        "length": 7,
        "pinyin": "srfqysd",
        "q": [3],
        "r": [1],
        "s": [0, 5],
        "y": [4]
    }, {
        "chinese": "耘冉恬缨塘",
        "id": 534,
        "length": 5,
        "pinyin": "yrtyt",
        "r": [1],
        "t": [2, 4],
        "y": [0, 3]
    }, {
        "b": [4, 6],
        "chinese": "纶禄鸽辱陛稀备铬酱胀",
        "g": [2, 7],
        "id": 535,
        "j": [8],
        "l": [0, 1],
        "length": 10,
        "pinyin": "llgrbxbgjz",
        "r": [3],
        "x": [5],
        "z": [9]
    }, {
        "c": [4],
        "chinese": "亭沟萄眉谗温沫搁帝胜奢",
        "d": [8],
        "g": [1, 7],
        "id": 536,
        "length": 11,
        "m": [3, 6],
        "pinyin": "tgtmcwmgdss",
        "s": [9, 10],
        "t": [0, 2],
        "w": [5]
    }, {
        "b": [1, 6],
        "chinese": "刊宝专示约益扳陷鬃楼踊",
        "id": 537,
        "k": [0],
        "l": [9],
        "length": 11,
        "pinyin": "kbzsyybxzly",
        "s": [3],
        "x": [7],
        "y": [4, 5, 10],
        "z": [2, 8]
    }, {
        "c": [7],
        "chinese": "肩舀循判看娄熄晨瓤",
        "id": 538,
        "j": [0],
        "k": [4],
        "l": [5],
        "length": 9,
        "p": [3],
        "pinyin": "jyxpklxcr",
        "r": [8],
        "x": [2, 6],
        "y": [1]
    }, {
        "c": [0],
        "chinese": "厨与方够争鹃",
        "f": [2],
        "g": [3],
        "id": 539,
        "j": [5],
        "length": 6,
        "pinyin": "cyfgzj",
        "y": [1],
        "z": [4]
    }, {
        "chinese": "顺住掏劫库艇框",
        "id": 540,
        "j": [3],
        "k": [4, 6],
        "length": 7,
        "pinyin": "sztjktk",
        "s": [0],
        "t": [2, 5],
        "z": [1]
    }, {
        "b": [2, 6],
        "c": [1, 4],
        "chinese": "国窜棒莆词刷饱殷枷翔",
        "g": [0],
        "id": 541,
        "j": [8],
        "length": 10,
        "p": [3],
        "pinyin": "gcbpcsbyjx",
        "s": [5],
        "x": [9],
        "y": [7]
    }, {
        "chinese": "训消疆升庆",
        "id": 542,
        "j": [2],
        "length": 5,
        "pinyin": "xxjsq",
        "q": [4],
        "s": [3],
        "x": [0, 1]
    }, {
        "b": [4],
        "chinese": "拖甩寅富伯菇墟",
        "f": [3],
        "g": [5],
        "id": 543,
        "length": 7,
        "pinyin": "tsyfbgx",
        "s": [1],
        "t": [0],
        "x": [6],
        "y": [2]
    }, {
        "chinese": "震婆耿肚熄抿烫珠匹",
        "d": [3],
        "g": [2],
        "id": 544,
        "length": 9,
        "m": [5],
        "p": [1, 8],
        "pinyin": "zpgdxmtzp",
        "t": [6],
        "x": [4],
        "z": [0, 7]
    }, {
        "c": [5],
        "chinese": "予英邮脓跨超辜",
        "g": [6],
        "id": 545,
        "k": [4],
        "length": 7,
        "n": [3],
        "pinyin": "yyynkcg",
        "y": [0, 1, 2]
    }, {
        "c": [0, 4],
        "chinese": "捶捞旗省踌",
        "id": 546,
        "l": [1],
        "length": 5,
        "pinyin": "clqsc",
        "q": [2],
        "s": [3]
    }, {
        "chinese": "巫寇僻颧斩适鞘熔刊独值",
        "d": [9],
        "id": 547,
        "k": [1, 8],
        "length": 11,
        "p": [2],
        "pinyin": "wkpqzsqrkdz",
        "q": [3, 6],
        "r": [7],
        "s": [5],
        "w": [0],
        "z": [4, 10]
    }, {
        "chinese": "坷沂渗仗樱亏叁蝶",
        "d": [7],
        "id": 548,
        "k": [0, 5],
        "length": 8,
        "pinyin": "kyszyksd",
        "s": [2, 6],
        "y": [1, 4],
        "z": [3]
    }, {
        "c": [0, 7],
        "chinese": "程沟匹镶锯阴喀耻瑚",
        "g": [1],
        "h": [8],
        "id": 549,
        "j": [4],
        "k": [6],
        "length": 9,
        "p": [2],
        "pinyin": "cgpxjykch",
        "x": [3],
        "y": [5]
    }, {
        "a": [3],
        "chinese": "辉归烧暗讯劣",
        "g": [1],
        "h": [0],
        "id": 550,
        "l": [5],
        "length": 6,
        "pinyin": "hgsaxl",
        "s": [2],
        "x": [4]
    }, {
        "chinese": "巳啪英谨沃突霓聘叶饲庶",
        "id": 551,
        "j": [3],
        "length": 11,
        "n": [6],
        "p": [1, 7],
        "pinyin": "spyjwtnpyss",
        "s": [0, 9, 10],
        "t": [5],
        "w": [4],
        "y": [2, 8]
    }, {
        "chinese": "粮氖汀菊澎",
        "id": 552,
        "j": [3],
        "l": [0],
        "length": 5,
        "n": [1],
        "p": [4],
        "pinyin": "lntjp",
        "t": [2]
    }, {
        "chinese": "牧挖拱庞届疗遁",
        "d": [6],
        "g": [2],
        "id": 553,
        "j": [4],
        "l": [5],
        "length": 7,
        "m": [0],
        "p": [3],
        "pinyin": "mwgpjld",
        "w": [1]
    }, {
        "chinese": "央难侍直蛮隐筒",
        "id": 554,
        "length": 7,
        "m": [4],
        "n": [1],
        "pinyin": "ynszmyt",
        "s": [2],
        "t": [6],
        "y": [0, 5],
        "z": [3]
    }, {
        "a": [8],
        "chinese": "皿珐秧啮斟诗遗拽癌误",
        "f": [1],
        "id": 555,
        "length": 10,
        "m": [0],
        "n": [3],
        "pinyin": "mfynzsyzaw",
        "s": [5],
        "w": [9],
        "y": [2, 6],
        "z": [4, 7]
    }, {
        "chinese": "假尔忠算",
        "e": [1],
        "id": 556,
        "j": [0],
        "length": 4,
        "pinyin": "jezs",
        "s": [3],
        "z": [2]
    }, {
        "b": [2],
        "c": [0],
        "chinese": "持密补挤",
        "id": 557,
        "j": [3],
        "length": 4,
        "m": [1],
        "pinyin": "cmbj"
    }, {
        "chinese": "熄谁炔契熊增说彤",
        "g": [2],
        "id": 558,
        "length": 8,
        "pinyin": "xsgqxzst",
        "q": [3],
        "s": [1, 6],
        "t": [7],
        "x": [0, 4],
        "z": [5]
    }, {
        "b": [0],
        "chinese": "疤淆韦骨榔蚀鞋弘功",
        "g": [3, 8],
        "h": [7],
        "id": 559,
        "l": [4],
        "length": 9,
        "pinyin": "bxwglsxhg",
        "s": [5],
        "w": [2],
        "x": [1, 6]
    }, {
        "chinese": "耗底后段泞惹",
        "d": [1, 3],
        "h": [0, 2],
        "id": 560,
        "length": 6,
        "n": [4],
        "pinyin": "hdhdnr",
        "r": [5]
    }, {
        "c": [1],
        "chinese": "纤醋坟泡监",
        "f": [2],
        "id": 561,
        "j": [4],
        "length": 5,
        "p": [3],
        "pinyin": "xcfpj",
        "x": [0]
    }, {
        "b": [4],
        "chinese": "佣父借蔗膀袒曝崖资宦",
        "f": [1],
        "h": [9],
        "id": 562,
        "j": [2],
        "length": 10,
        "p": [6],
        "pinyin": "yfjzbtpyzh",
        "t": [5],
        "y": [0, 7],
        "z": [3, 8]
    }, {
        "b": [4],
        "chinese": "遭均竞涨包男刃",
        "id": 563,
        "j": [1, 2],
        "length": 7,
        "n": [5],
        "pinyin": "zjjzbnr",
        "r": [6],
        "z": [0, 3]
    }, {
        "chinese": "辕吮眉周媒否换弹",
        "d": [7],
        "f": [5],
        "h": [6],
        "id": 564,
        "length": 8,
        "m": [2, 4],
        "pinyin": "ysmzmfhd",
        "s": [1],
        "y": [0],
        "z": [3]
    }, {
        "c": [7],
        "chinese": "痞感章阶扼遇卫陈",
        "e": [4],
        "g": [1],
        "id": 565,
        "j": [3],
        "length": 8,
        "p": [0],
        "pinyin": "pgzjeywc",
        "w": [6],
        "y": [5],
        "z": [2]
    }, {
        "chinese": "粱卢皖盲",
        "id": 566,
        "l": [0, 1],
        "length": 4,
        "m": [3],
        "pinyin": "llwm",
        "w": [2]
    }, {
        "chinese": "龋决薛饰",
        "id": 567,
        "j": [1],
        "length": 4,
        "pinyin": "qjxs",
        "q": [0],
        "s": [3],
        "x": [2]
    }, {
        "b": [9],
        "chinese": "孕纹闰宦象州纲阵昼悲忙",
        "g": [6],
        "h": [3],
        "id": 568,
        "length": 11,
        "m": [10],
        "pinyin": "ywrhxzgzzbm",
        "r": [2],
        "w": [1],
        "x": [4],
        "y": [0],
        "z": [5, 7, 8]
    }, {
        "c": [0, 2, 4],
        "chinese": "餐戒船窃传支豌牟轧邀",
        "id": 569,
        "j": [1],
        "length": 10,
        "m": [7],
        "pinyin": "cjcqczwmyy",
        "q": [3],
        "w": [6],
        "y": [8, 9],
        "z": [5]
    }, {
        "c": [3, 4],
        "chinese": "妇狞公沧猖迪感庶",
        "d": [5],
        "f": [0],
        "g": [2, 6],
        "id": 570,
        "length": 8,
        "n": [1],
        "pinyin": "fngccdgs",
        "s": [7]
    }, {
        "b": [2],
        "c": [10],
        "chinese": "漫稻备锭凳改亥咙撬炯蝉",
        "d": [1, 3, 4],
        "g": [5],
        "h": [6],
        "id": 571,
        "j": [9],
        "l": [7],
        "length": 11,
        "m": [0],
        "pinyin": "mdbddghlqjc",
        "q": [8]
    }, {
        "b": [3],
        "c": [1],
        "chinese": "婪滁卉班铰维烧颗伞裸颠",
        "d": [10],
        "h": [2],
        "id": 572,
        "j": [4],
        "k": [7],
        "l": [0, 9],
        "length": 11,
        "pinyin": "lchbjwsksld",
        "s": [6, 8],
        "w": [5]
    }, {
        "chinese": "啼幅桩卖庶扇院桥",
        "f": [1],
        "id": 573,
        "length": 8,
        "m": [3],
        "pinyin": "tfzmssyq",
        "q": [7],
        "s": [4, 5],
        "t": [0],
        "y": [6],
        "z": [2]
    }, {
        "chinese": "犀伦蜀灭牧沟凌阁",
        "g": [5, 7],
        "id": 574,
        "l": [1, 6],
        "length": 8,
        "m": [3, 4],
        "pinyin": "xlsmmglg",
        "s": [2],
        "x": [0]
    }, {
        "chinese": "耿腻啸酿钙号",
        "g": [0, 4],
        "h": [5],
        "id": 575,
        "length": 6,
        "n": [1, 3],
        "pinyin": "gnxngh",
        "x": [2]
    }, {
        "chinese": "葬颜陡奠饥漾回适",
        "d": [2, 3],
        "h": [6],
        "id": 576,
        "j": [4],
        "length": 8,
        "pinyin": "zyddjyhs",
        "s": [7],
        "y": [1, 5],
        "z": [0]
    }, {
        "chinese": "喀想狭嵌移",
        "id": 577,
        "k": [0],
        "length": 5,
        "pinyin": "kxxqy",
        "q": [3],
        "x": [1, 2],
        "y": [4]
    }, {
        "chinese": "绿缸鹊烛芳库果",
        "f": [4],
        "g": [1, 6],
        "id": 578,
        "k": [5],
        "l": [0],
        "length": 7,
        "pinyin": "lgqzfkg",
        "q": [2],
        "z": [3]
    }, {
        "c": [0],
        "chinese": "猖恭揽污和藕举娩",
        "g": [1],
        "h": [4],
        "id": 579,
        "j": [6],
        "l": [2],
        "length": 8,
        "m": [7],
        "o": [5],
        "pinyin": "cglwhojm",
        "w": [3]
    }, {
        "chinese": "遂含奈捞吕釜旱乏秽",
        "f": [5, 7],
        "h": [1, 6, 8],
        "id": 580,
        "l": [3, 4],
        "length": 9,
        "n": [2],
        "pinyin": "shnllfhfh",
        "s": [0]
    }, {
        "b": [7],
        "c": [5],
        "chinese": "婶至栗县杭斥爹搏口坊沿",
        "d": [6],
        "f": [9],
        "h": [4],
        "id": 581,
        "k": [8],
        "l": [2],
        "length": 11,
        "pinyin": "szlxhcdbkfy",
        "s": [0],
        "x": [3],
        "y": [10],
        "z": [1]
    }, {
        "chinese": "拭庚苹印啤雀额膏折寨杖",
        "e": [6],
        "g": [1, 7],
        "id": 582,
        "length": 11,
        "p": [2, 4],
        "pinyin": "sgpypqegzzz",
        "q": [5],
        "s": [0],
        "y": [3],
        "z": [8, 9, 10]
    }, {
        "c": [4],
        "chinese": "卿蒲拳琳叉",
        "id": 583,
        "l": [3],
        "length": 5,
        "p": [1],
        "pinyin": "qpqlc",
        "q": [0, 2]
    }, {
        "b": [1],
        "chinese": "阜蓖诣屹悠仅",
        "f": [0],
        "id": 584,
        "j": [5],
        "length": 6,
        "pinyin": "fbyyyj",
        "y": [2, 3, 4]
    }, {
        "b": [6],
        "chinese": "钾醚拖异早登褒骡",
        "d": [5],
        "id": 585,
        "j": [0],
        "l": [7],
        "length": 8,
        "m": [1],
        "pinyin": "jmtyzdbl",
        "t": [2],
        "y": [3],
        "z": [4]
    }, {
        "b": [2],
        "c": [3],
        "chinese": "吞抡哺促糠踪",
        "id": 586,
        "k": [4],
        "l": [1],
        "length": 6,
        "pinyin": "tlbckz",
        "t": [0],
        "z": [5]
    }, {
        "b": [2],
        "c": [6],
        "chinese": "铀金搏想痪闸吃乾套",
        "h": [4],
        "id": 587,
        "j": [1],
        "length": 9,
        "pinyin": "yjbxhzcqt",
        "q": [7],
        "t": [8],
        "x": [3],
        "y": [0],
        "z": [5]
    }, {
        "chinese": "富耳如旅统",
        "e": [1],
        "f": [0],
        "id": 588,
        "l": [3],
        "length": 5,
        "pinyin": "ferlt",
        "r": [2],
        "t": [4]
    }, {
        "b": [7, 8],
        "c": [0],
        "chinese": "除尹腺业炎励蛾摈败啪",
        "e": [6],
        "id": 589,
        "l": [5],
        "length": 10,
        "p": [9],
        "pinyin": "cyxyylebbp",
        "x": [2],
        "y": [1, 3, 4]
    }, {
        "b": [5],
        "c": [1, 4],
        "chinese": "两促孙嘻次苯项莱淘寓",
        "id": 590,
        "l": [0, 7],
        "length": 10,
        "pinyin": "lcsxcbxlty",
        "s": [2],
        "t": [8],
        "x": [3, 6],
        "y": [9]
    }, {
        "a": [0, 3],
        "c": [4],
        "chinese": "岸稍乓肮除",
        "id": 591,
        "length": 5,
        "p": [2],
        "pinyin": "aspac",
        "s": [1]
    }, {
        "chinese": "谦管孟立萝葫歹",
        "d": [6],
        "g": [1],
        "h": [5],
        "id": 592,
        "l": [3, 4],
        "length": 7,
        "m": [2],
        "pinyin": "qgmllhd",
        "q": [0]
    }, {
        "chinese": "枢屉帝皖",
        "d": [2],
        "id": 593,
        "length": 4,
        "pinyin": "stdw",
        "s": [0],
        "t": [1],
        "w": [3]
    }, {
        "c": [1, 8],
        "chinese": "薪呈韶石盼途噬罗馋糟铺",
        "id": 594,
        "l": [7],
        "length": 11,
        "p": [4, 10],
        "pinyin": "xcssptslczp",
        "s": [2, 3, 6],
        "t": [5],
        "x": [0],
        "z": [9]
    }, {
        "chinese": "覆狡犊符",
        "d": [2],
        "f": [0, 3],
        "id": 595,
        "j": [1],
        "length": 4,
        "pinyin": "fjdf"
    }, {
        "chinese": "洲撩哇恳茧轻伦怀",
        "h": [7],
        "id": 596,
        "j": [4],
        "k": [3],
        "l": [1, 6],
        "length": 8,
        "pinyin": "zlwkjqlh",
        "q": [5],
        "w": [2],
        "z": [0]
    }, {
        "c": [5],
        "chinese": "钝逮早厌侩淬",
        "d": [0, 1],
        "id": 597,
        "k": [4],
        "length": 6,
        "pinyin": "ddzykc",
        "y": [3],
        "z": [2]
    }, {
        "c": [8],
        "chinese": "略吝扰雁首辗挠蕉槽",
        "id": 598,
        "j": [7],
        "l": [0, 1],
        "length": 9,
        "n": [5, 6],
        "pinyin": "llrysnnjc",
        "r": [2],
        "s": [4],
        "y": [3]
    }, {
        "chinese": "山缝糕系匹忧炉姿驹笋",
        "f": [1],
        "g": [2],
        "id": 599,
        "j": [8],
        "l": [6],
        "length": 10,
        "p": [4],
        "pinyin": "sfgxpylzjs",
        "s": [0, 9],
        "x": [3],
        "y": [5],
        "z": [7]
    }, {
        "b": [0],
        "chinese": "丙拱垒扼每辐阎缨挪握",
        "e": [3],
        "f": [5],
        "g": [1],
        "id": 600,
        "l": [2],
        "length": 10,
        "m": [4],
        "n": [8],
        "pinyin": "bglemfyynw",
        "w": [9],
        "y": [6, 7]
    }, {
        "chinese": "市寨颠衰拘经够顺",
        "d": [2],
        "g": [6],
        "id": 601,
        "j": [4, 5],
        "length": 8,
        "pinyin": "szdsjjgs",
        "s": [0, 3, 7],
        "z": [1]
    }, {
        "b": [4],
        "chinese": "硅谭倚伤勃谈竟众瑚梁谅",
        "g": [0],
        "h": [8],
        "id": 602,
        "j": [6],
        "l": [9, 10],
        "length": 11,
        "pinyin": "gtysbtjzhll",
        "s": [3],
        "t": [1, 5],
        "y": [2],
        "z": [7]
    }, {
        "c": [7],
        "chinese": "雁腿纵揍湾格褪池斗琼雅",
        "d": [8],
        "g": [5],
        "id": 603,
        "length": 11,
        "pinyin": "ytzzwgtcdqy",
        "q": [9],
        "t": [1, 6],
        "w": [4],
        "y": [0, 10],
        "z": [2, 3]
    }, {
        "chinese": "聋亢喇壬各移",
        "g": [4],
        "id": 604,
        "k": [1],
        "l": [0, 2],
        "length": 6,
        "pinyin": "lklrgy",
        "r": [3],
        "y": [5]
    }, {
        "b": [4],
        "chinese": "蛆置破漳扳斩刘",
        "id": 605,
        "l": [6],
        "length": 7,
        "p": [2],
        "pinyin": "qzpzbzl",
        "q": [0],
        "z": [1, 3, 5]
    }, {
        "b": [6],
        "chinese": "牢撕没笋焉猾奔灰蛙愤完",
        "f": [9],
        "h": [5, 7],
        "id": 606,
        "l": [0],
        "length": 11,
        "m": [2],
        "pinyin": "lsmsyhbhwfw",
        "s": [1, 3],
        "w": [8, 10],
        "y": [4]
    }, {
        "chinese": "柳棋镜绝",
        "id": 607,
        "j": [2, 3],
        "l": [0],
        "length": 4,
        "pinyin": "lqjj",
        "q": [1]
    }, {
        "c": [0],
        "chinese": "扯勤愧婴诌母即识啤",
        "id": 608,
        "j": [6],
        "k": [2],
        "length": 9,
        "m": [5],
        "p": [8],
        "pinyin": "cqkyzmjsp",
        "q": [1],
        "s": [7],
        "y": [3],
        "z": [4]
    }, {
        "chinese": "放狸莉骆",
        "f": [0],
        "id": 609,
        "l": [1, 2, 3],
        "length": 4,
        "pinyin": "flll"
    }, {
        "b": [9],
        "c": [8],
        "chinese": "丰岗膝笑杂哭鲸是辞冰孔",
        "f": [0],
        "g": [1],
        "id": 610,
        "j": [6],
        "k": [5, 10],
        "length": 11,
        "pinyin": "fgxxzkjscbk",
        "s": [7],
        "x": [2, 3],
        "z": [4]
    }, {
        "chinese": "季聊汤蜡",
        "id": 611,
        "j": [0],
        "l": [1, 3],
        "length": 4,
        "pinyin": "jltl",
        "t": [2]
    }, {
        "b": [4],
        "c": [1],
        "chinese": "檄策以颂编流渐褂",
        "g": [7],
        "id": 612,
        "j": [6],
        "l": [5],
        "length": 8,
        "pinyin": "xcysbljg",
        "s": [3],
        "x": [0],
        "y": [2]
    }, {
        "c": [4],
        "chinese": "滦橇匈嘻疮",
        "id": 613,
        "l": [0],
        "length": 5,
        "pinyin": "lqxxc",
        "q": [1],
        "x": [2, 3]
    }, {
        "c": [3],
        "chinese": "撕嚎姨曾县依萌",
        "h": [1],
        "id": 614,
        "length": 7,
        "m": [6],
        "pinyin": "shycxym",
        "s": [0],
        "x": [4],
        "y": [2, 5]
    }, {
        "chinese": "肉乃懈卢拟打至琼烛",
        "d": [5],
        "id": 615,
        "l": [3],
        "length": 9,
        "n": [1, 4],
        "pinyin": "rnxlndzqz",
        "q": [7],
        "r": [0],
        "x": [2],
        "z": [6, 8]
    }, {
        "b": [1],
        "chinese": "强疤握更",
        "g": [3],
        "id": 616,
        "length": 4,
        "pinyin": "qbwg",
        "q": [0],
        "w": [2]
    }, {
        "chinese": "享化厄吭宏企鄂",
        "e": [2, 6],
        "h": [1, 4],
        "id": 617,
        "k": [3],
        "length": 7,
        "pinyin": "xhekhqe",
        "q": [5],
        "x": [0]
    }, {
        "c": [0],
        "chinese": "促妊粱瞳喉",
        "h": [4],
        "id": 618,
        "l": [2],
        "length": 5,
        "pinyin": "crlth",
        "r": [1],
        "t": [3]
    }, {
        "chinese": "外慷钎耽旦确咒",
        "d": [3, 4],
        "id": 619,
        "k": [1],
        "length": 7,
        "pinyin": "wkqddqz",
        "q": [2, 5],
        "w": [0],
        "z": [6]
    }, {
        "chinese": "柔季心悬妙胃确钟辛篱",
        "id": 620,
        "j": [1],
        "l": [9],
        "length": 10,
        "m": [4],
        "pinyin": "rjxxmwqzxl",
        "q": [6],
        "r": [0],
        "w": [5],
        "x": [2, 3, 8],
        "z": [7]
    }, {
        "b": [1],
        "c": [5],
        "chinese": "娃辈顽煮模次瞄囤",
        "d": [7],
        "id": 621,
        "length": 8,
        "m": [4, 6],
        "pinyin": "wbwzmcmd",
        "w": [0, 2],
        "z": [3]
    }, {
        "b": [1],
        "c": [6],
        "chinese": "获憋洽链惰谎淳恩冻尿弗",
        "d": [4, 8],
        "e": [7],
        "f": [10],
        "h": [0, 5],
        "id": 622,
        "l": [3],
        "length": 11,
        "n": [9],
        "pinyin": "hbqldhcednf",
        "q": [2]
    }, {
        "c": [4],
        "chinese": "硝忿焚权吹",
        "f": [1, 2],
        "id": 623,
        "length": 5,
        "pinyin": "xffqc",
        "q": [3],
        "x": [0]
    }, {
        "b": [1],
        "chinese": "辣佰铁韧秋",
        "id": 624,
        "l": [0],
        "length": 5,
        "pinyin": "lbtrq",
        "q": [4],
        "r": [3],
        "t": [2]
    }, {
        "c": [6],
        "chinese": "兼侍增远量届舱劲踪国嚎",
        "g": [9],
        "h": [10],
        "id": 625,
        "j": [0, 5, 7],
        "l": [4],
        "length": 11,
        "pinyin": "jszyljcjzgh",
        "s": [1],
        "y": [3],
        "z": [2, 8]
    }, {
        "chinese": "匣辛讯醚圃葛",
        "g": [5],
        "id": 626,
        "length": 6,
        "m": [3],
        "p": [4],
        "pinyin": "xxxmpg",
        "x": [0, 1, 2]
    }, {
        "c": [5],
        "chinese": "怪惶螟趣蘑丛拍字挛捣负",
        "d": [9],
        "f": [10],
        "g": [0],
        "h": [1],
        "id": 627,
        "l": [8],
        "length": 11,
        "m": [2, 4],
        "p": [6],
        "pinyin": "ghmqmcpzldf",
        "q": [3],
        "z": [7]
    }, {
        "chinese": "事几灾圃夯羡似",
        "h": [4],
        "id": 628,
        "j": [1],
        "length": 7,
        "p": [3],
        "pinyin": "sjzphxs",
        "s": [0, 6],
        "x": [5],
        "z": [2]
    }, {
        "chinese": "滩斋群膏疚榨",
        "g": [3],
        "id": 629,
        "j": [4],
        "length": 6,
        "pinyin": "tzqgjz",
        "q": [2],
        "t": [0],
        "z": [1, 5]
    }, {
        "chinese": "种座甩晰盲疥寄蛔炉伙",
        "h": [7, 9],
        "id": 630,
        "j": [5, 6],
        "l": [8],
        "length": 10,
        "m": [4],
        "pinyin": "zzsxmjjhlh",
        "s": [2],
        "x": [3],
        "z": [0, 1]
    }, {
        "c": [0, 4],
        "chinese": "操因拓钒椎伙揭欣阔蚜",
        "f": [3],
        "h": [5],
        "id": 631,
        "j": [6],
        "k": [8],
        "length": 10,
        "pinyin": "cytfchjxky",
        "t": [2],
        "x": [7],
        "y": [1, 9]
    }, {
        "c": [3],
        "chinese": "隶荐涟滁",
        "id": 632,
        "j": [1],
        "l": [0, 2],
        "length": 4,
        "pinyin": "ljlc"
    }, {
        "c": [2],
        "chinese": "磐芦弛佑滇冯凡乙",
        "d": [4],
        "f": [5, 6],
        "id": 633,
        "l": [1],
        "length": 8,
        "p": [0],
        "pinyin": "plcydffy",
        "y": [3, 7]
    }, {
        "chinese": "苑茄饶华雕狄危涣驾艺殷",
        "d": [4, 5],
        "h": [3, 7],
        "id": 634,
        "j": [1, 8],
        "length": 11,
        "pinyin": "yjrhddwhjyy",
        "r": [2],
        "w": [6],
        "y": [0, 9, 10]
    }, {
        "c": [3, 10],
        "chinese": "巡箱淖椽就砒袍撬讯霍厕",
        "h": [9],
        "id": 635,
        "j": [4],
        "length": 11,
        "n": [2],
        "p": [5, 6],
        "pinyin": "xxncjppqxhc",
        "q": [7],
        "x": [0, 1, 8]
    }, {
        "c": [3, 6],
        "chinese": "禁抖碘彻港宏冲貉赃",
        "d": [1, 2],
        "g": [4],
        "h": [5, 7],
        "id": 636,
        "j": [0],
        "length": 9,
        "pinyin": "jddcghchz",
        "z": [8]
    }, {
        "chinese": "罩桃颧肪姓",
        "f": [3],
        "id": 637,
        "length": 5,
        "pinyin": "ztqfx",
        "q": [2],
        "t": [1],
        "x": [4],
        "z": [0]
    }, {
        "c": [7],
        "chinese": "沾锯赵业洲霄馆草娘占",
        "g": [6],
        "id": 638,
        "j": [1],
        "length": 10,
        "n": [8],
        "pinyin": "zjzyzxgcnz",
        "x": [5],
        "y": [3],
        "z": [0, 2, 4, 9]
    }, {
        "b": [0],
        "chinese": "斑殷慎畏箕",
        "id": 639,
        "j": [4],
        "length": 5,
        "pinyin": "byswj",
        "s": [2],
        "w": [3],
        "y": [1]
    }, {
        "chinese": "蓟淤憾诗氟数撼罗耗辑",
        "f": [4],
        "h": [2, 6, 8],
        "id": 640,
        "j": [0, 9],
        "l": [7],
        "length": 10,
        "pinyin": "jyhsfshlhj",
        "s": [3, 5],
        "y": [1]
    }, {
        "chinese": "翻垃第耗戊",
        "d": [2],
        "f": [0],
        "h": [3],
        "id": 641,
        "l": [1],
        "length": 5,
        "pinyin": "fldhw",
        "w": [4]
    }, {
        "b": [2],
        "c": [4, 7],
        "chinese": "淀谅辩硝惩公夜窜",
        "d": [0],
        "g": [5],
        "id": 642,
        "l": [1],
        "length": 8,
        "pinyin": "dlbxcgyc",
        "x": [3],
        "y": [6]
    }, {
        "b": [3, 4],
        "chinese": "酸隧孟梆叭兄该肝钨氢根",
        "g": [6, 7, 10],
        "id": 643,
        "length": 11,
        "m": [2],
        "pinyin": "ssmbbxggwqg",
        "q": [9],
        "s": [0, 1],
        "w": [8],
        "x": [5]
    }, {
        "c": [6],
        "chinese": "僧吼静仕辗恫辞",
        "d": [5],
        "h": [1],
        "id": 644,
        "j": [2],
        "length": 7,
        "n": [4],
        "pinyin": "shjsndc",
        "s": [0, 3]
    }, {
        "chinese": "峰氏陨兑昏月杨磐邵",
        "d": [3],
        "f": [0],
        "h": [4],
        "id": 645,
        "length": 9,
        "p": [7],
        "pinyin": "fsydhyyps",
        "s": [1, 8],
        "y": [2, 5, 6]
    }, {
        "b": [2],
        "c": [0],
        "chinese": "醋漂毕囊谩唤杭想",
        "h": [5, 6],
        "id": 646,
        "length": 8,
        "m": [4],
        "n": [3],
        "p": [1],
        "pinyin": "cpbnmhhx",
        "x": [7]
    }, {
        "a": [6],
        "b": [3],
        "c": [7],
        "chinese": "蔬龋俗膊吱冀癌绰",
        "id": 647,
        "j": [5],
        "length": 8,
        "pinyin": "sqsbzjac",
        "q": [1],
        "s": [0, 2],
        "z": [4]
    }, {
        "c": [6],
        "chinese": "约设玄喂或尿柴",
        "h": [4],
        "id": 648,
        "length": 7,
        "n": [5],
        "pinyin": "ysxwhnc",
        "s": [1],
        "w": [3],
        "x": [2],
        "y": [0]
    }, {
        "c": [7],
        "chinese": "仪福满收娇欲麻程遭",
        "f": [1],
        "id": 649,
        "j": [4],
        "length": 9,
        "m": [2, 6],
        "pinyin": "yfmsjymcz",
        "s": [3],
        "y": [0, 5],
        "z": [8]
    }, {
        "chinese": "摄择傻僳",
        "id": 650,
        "length": 4,
        "pinyin": "szss",
        "s": [0, 2, 3],
        "z": [1]
    }, {
        "chinese": "虽佑烂锁栽米考嘿",
        "h": [7],
        "id": 651,
        "k": [6],
        "l": [2],
        "length": 8,
        "m": [5],
        "pinyin": "sylszmkh",
        "s": [0, 3],
        "y": [1],
        "z": [4]
    }, {
        "chinese": "吝洋荒佣搪菌",
        "h": [2],
        "id": 652,
        "j": [5],
        "l": [0],
        "length": 6,
        "pinyin": "lyhytj",
        "t": [4],
        "y": [1, 3]
    }, {
        "chinese": "漠每董面缆频",
        "d": [2],
        "id": 653,
        "l": [4],
        "length": 6,
        "m": [0, 1, 3],
        "p": [5],
        "pinyin": "mmdmlp"
    }, {
        "chinese": "谬剿狞身蔷腻苔朽",
        "id": 654,
        "j": [1],
        "length": 8,
        "m": [0],
        "n": [2, 5],
        "pinyin": "mjnsqntx",
        "q": [4],
        "s": [3],
        "t": [6],
        "x": [7]
    }, {
        "b": [3],
        "chinese": "邹痕铣奔莉贯基戌",
        "g": [5],
        "h": [1],
        "id": 655,
        "j": [6],
        "l": [4],
        "length": 8,
        "pinyin": "zhxblgjx",
        "x": [2, 7],
        "z": [0]
    }, {
        "b": [8],
        "c": [4],
        "chinese": "筷优垛蜒炊崖衡琉镑坚欲",
        "d": [2],
        "h": [6],
        "id": 656,
        "j": [9],
        "k": [0],
        "l": [7],
        "length": 11,
        "pinyin": "kydycyhlbjy",
        "y": [1, 3, 5, 10]
    }, {
        "a": [4],
        "chinese": "琶铃漂始懊",
        "id": 657,
        "l": [1],
        "length": 5,
        "p": [0, 2],
        "pinyin": "plpsa",
        "s": [3]
    }, {
        "b": [2],
        "chinese": "铱琳边削贾",
        "id": 658,
        "j": [4],
        "l": [1],
        "length": 5,
        "pinyin": "ylbxj",
        "x": [3],
        "y": [0]
    }, {
        "chinese": "俄忙期尤慧境",
        "e": [0],
        "h": [4],
        "id": 659,
        "j": [5],
        "length": 6,
        "m": [1],
        "pinyin": "emqyhj",
        "q": [2],
        "y": [3]
    }, {
        "c": [5],
        "chinese": "兹茅描钱衅蚕痪",
        "h": [6],
        "id": 660,
        "length": 7,
        "m": [1, 2],
        "pinyin": "zmmqxch",
        "q": [3],
        "x": [4],
        "z": [0]
    }, {
        "b": [2],
        "c": [0, 1],
        "chinese": "材彻罢以院蝴能",
        "h": [5],
        "id": 661,
        "length": 7,
        "n": [6],
        "pinyin": "ccbyyhn",
        "y": [3, 4]
    }, {
        "chinese": "食箍染甄",
        "g": [1],
        "id": 662,
        "length": 4,
        "pinyin": "sgrz",
        "r": [2],
        "s": [0],
        "z": [3]
    }, {
        "chinese": "骗狮码牺刊诫疏圃剩",
        "id": 663,
        "j": [5],
        "k": [4],
        "length": 9,
        "m": [2],
        "p": [0, 7],
        "pinyin": "psmxkjsps",
        "s": [1, 6, 8],
        "x": [3]
    }, {
        "c": [1, 3],
        "chinese": "腮畜颊陈",
        "id": 664,
        "j": [2],
        "length": 4,
        "pinyin": "scjc",
        "s": [0]
    }, {
        "chinese": "睛虾投瞩涕刑糜杭吊泰",
        "d": [8],
        "h": [7],
        "id": 665,
        "j": [0],
        "length": 10,
        "m": [6],
        "pinyin": "jxtztxmhdt",
        "t": [2, 4, 9],
        "x": [1, 5],
        "z": [3]
    }, {
        "a": [4],
        "b": [9],
        "chinese": "刷诸拳靴艾自屹浮律谤咳",
        "f": [7],
        "h": [10],
        "id": 666,
        "l": [8],
        "length": 11,
        "pinyin": "szqxazyflbh",
        "q": [2],
        "s": [0],
        "x": [3],
        "y": [6],
        "z": [1, 5]
    }, {
        "chinese": "鹅悟涟故雨瑞",
        "e": [0],
        "g": [3],
        "id": 667,
        "l": [2],
        "length": 6,
        "pinyin": "ewlgyr",
        "r": [5],
        "w": [1],
        "y": [4]
    }, {
        "a": [0],
        "c": [1, 6],
        "chinese": "埃掺殿抖奋狮肠",
        "d": [2, 3],
        "f": [4],
        "id": 668,
        "length": 7,
        "pinyin": "acddfsc",
        "s": [5]
    }, {
        "c": [2, 4],
        "chinese": "眨切躇塔船沪",
        "h": [5],
        "id": 669,
        "length": 6,
        "pinyin": "zqctch",
        "q": [1],
        "t": [3],
        "z": [0]
    }, {
        "chinese": "钱隔疫逢牺责窝胀婿烟馅",
        "f": [3],
        "g": [1],
        "id": 670,
        "length": 11,
        "pinyin": "qgyfxzwzxyx",
        "q": [0],
        "w": [6],
        "x": [4, 8, 10],
        "y": [2, 9],
        "z": [5, 7]
    }, {
        "chinese": "咒篮删类栈油烩挚枢蓑",
        "h": [6],
        "id": 671,
        "l": [1, 3],
        "length": 10,
        "pinyin": "zlslzyhzss",
        "s": [2, 8, 9],
        "y": [5],
        "z": [0, 4, 7]
    }, {
        "b": [2],
        "chinese": "蹄牢毖氓揖谣译剖炭",
        "id": 672,
        "l": [1],
        "length": 9,
        "m": [3],
        "p": [7],
        "pinyin": "tlbmyyypt",
        "t": [0, 8],
        "y": [4, 5, 6]
    }, {
        "b": [5],
        "c": [9],
        "chinese": "占栅挠莽有鼻膝蓑锻揣",
        "d": [8],
        "id": 673,
        "length": 10,
        "m": [3],
        "n": [2],
        "pinyin": "zznmybxsdc",
        "s": [7],
        "x": [6],
        "y": [4],
        "z": [0, 1]
    }, {
        "c": [8],
        "chinese": "谩醚腑浮蛙等檄泡城鲁",
        "d": [5],
        "f": [2, 3],
        "id": 674,
        "l": [9],
        "length": 10,
        "m": [0, 1],
        "p": [7],
        "pinyin": "mmffwdxpcl",
        "w": [4],
        "x": [6]
    }, {
        "chinese": "小薪硒哭涸下妈疾粟忽廉",
        "h": [4, 9],
        "id": 675,
        "j": [7],
        "k": [3],
        "l": [10],
        "length": 11,
        "m": [6],
        "pinyin": "xxxkhxmjshl",
        "s": [8],
        "x": [0, 1, 2, 5]
    }, {
        "c": [8],
        "chinese": "砌力娇宏污聋身拳馋",
        "h": [3],
        "id": 676,
        "j": [2],
        "l": [1, 5],
        "length": 9,
        "pinyin": "qljhwlsqc",
        "q": [0, 7],
        "s": [6],
        "w": [4]
    }, {
        "b": [1],
        "chinese": "弟勃汤香饺譬罐沙土叼莹",
        "d": [0, 9],
        "g": [6],
        "id": 677,
        "j": [4],
        "length": 11,
        "p": [5],
        "pinyin": "dbtxjpgstdy",
        "s": [7],
        "t": [2, 8],
        "x": [3],
        "y": [10]
    }, {
        "c": [7],
        "chinese": "孽诈逊秽添叶浩除",
        "h": [3, 6],
        "id": 678,
        "length": 8,
        "n": [0],
        "pinyin": "nzxhtyhc",
        "t": [4],
        "x": [2],
        "y": [5],
        "z": [1]
    }, {
        "c": [0, 8],
        "chinese": "慈裂眉撕蛊邢航辗蹿屡",
        "g": [4],
        "h": [6],
        "id": 679,
        "l": [1, 9],
        "length": 10,
        "m": [2],
        "n": [7],
        "pinyin": "clmsgxhncl",
        "s": [3],
        "x": [5]
    }, {
        "chinese": "厚纽谰抿傻话滦栓由玲",
        "h": [0, 5],
        "id": 680,
        "l": [2, 6, 9],
        "length": 10,
        "m": [3],
        "n": [1],
        "pinyin": "hnlmshlsyl",
        "s": [4, 7],
        "y": [8]
    }, {
        "chinese": "宵荒麻拇缝颊历",
        "f": [4],
        "h": [1],
        "id": 681,
        "j": [5],
        "l": [6],
        "length": 7,
        "m": [2, 3],
        "pinyin": "xhmmfjl",
        "x": [0]
    }, {
        "b": [10],
        "c": [2],
        "chinese": "秋望材寐镭潘抒浅谊桨薄",
        "id": 682,
        "j": [9],
        "l": [4],
        "length": 11,
        "m": [3],
        "p": [5],
        "pinyin": "qwcmlpsqyjb",
        "q": [0, 7],
        "s": [6],
        "w": [1],
        "y": [8]
    }, {
        "a": [8],
        "c": [9],
        "chinese": "面怔寐毯座冒上律盎承蕴",
        "id": 683,
        "l": [7],
        "length": 11,
        "m": [0, 2, 5],
        "pinyin": "mzmtzmslacy",
        "s": [6],
        "t": [3],
        "y": [10],
        "z": [1, 4]
    }, {
        "chinese": "缀帝迪府娄鹤支",
        "d": [1, 2],
        "f": [3],
        "h": [5],
        "id": 684,
        "l": [4],
        "length": 7,
        "pinyin": "zddflhz",
        "z": [0, 6]
    }, {
        "c": [8],
        "chinese": "冤尊枷丸妈李过醒吵贾诉",
        "g": [6],
        "id": 685,
        "j": [2, 9],
        "l": [5],
        "length": 11,
        "m": [4],
        "pinyin": "yzjwmlgxcjs",
        "s": [10],
        "w": [3],
        "x": [7],
        "y": [0],
        "z": [1]
    }, {
        "chinese": "连贪琐飞翼之",
        "f": [3],
        "id": 686,
        "l": [0],
        "length": 6,
        "pinyin": "ltsfyz",
        "s": [2],
        "t": [1],
        "y": [4],
        "z": [5]
    }, {
        "b": [3],
        "chinese": "钟可芳毖壳遏付爬方扑晰",
        "e": [5],
        "f": [2, 6, 8],
        "id": 687,
        "k": [1, 4],
        "length": 11,
        "p": [7, 9],
        "pinyin": "zkfbkefpfpx",
        "x": [10],
        "z": [0]
    }, {
        "chinese": "派戮岿尼邻食寝奖珐臻",
        "f": [8],
        "id": 688,
        "j": [7],
        "k": [2],
        "l": [1, 4],
        "length": 10,
        "n": [3],
        "p": [0],
        "pinyin": "plknlsqjfz",
        "q": [6],
        "s": [5],
        "z": [9]
    }, {
        "c": [8],
        "chinese": "荒却狭阉橇东岛洪橱",
        "d": [5, 6],
        "h": [0, 7],
        "id": 689,
        "length": 9,
        "pinyin": "hqxyqddhc",
        "q": [1, 4],
        "x": [2],
        "y": [3]
    }, {
        "c": [4],
        "chinese": "汲咱厚卓嘲巾张",
        "h": [2],
        "id": 690,
        "j": [0, 5],
        "length": 7,
        "pinyin": "jzhzcjz",
        "z": [1, 3, 6]
    }, {
        "c": [4],
        "chinese": "堂孺剃减呈贡好棱绒",
        "g": [5],
        "h": [6],
        "id": 691,
        "j": [3],
        "l": [7],
        "length": 9,
        "pinyin": "trtjcghlr",
        "r": [1, 8],
        "t": [0, 2]
    }, {
        "b": [1, 2],
        "chinese": "留薄本怠当嫉",
        "d": [3, 4],
        "id": 692,
        "j": [5],
        "l": [0],
        "length": 6,
        "pinyin": "lbbddj"
    }, {
        "chinese": "渐话涤骂",
        "d": [2],
        "h": [1],
        "id": 693,
        "j": [0],
        "length": 4,
        "m": [3],
        "pinyin": "jhdm"
    }, {
        "c": [2],
        "chinese": "综束稠灶汉",
        "h": [4],
        "id": 694,
        "length": 5,
        "pinyin": "zsczh",
        "s": [1],
        "z": [0, 3]
    }, {
        "b": [1, 5],
        "chinese": "费渤千脑栋播萌",
        "d": [4],
        "f": [0],
        "id": 695,
        "length": 7,
        "m": [6],
        "n": [3],
        "pinyin": "fbqndbm",
        "q": [2]
    }, {
        "a": [5],
        "c": [9],
        "chinese": "砌料贤靡盏安琴窑抓粹",
        "id": 696,
        "l": [1],
        "length": 10,
        "m": [3],
        "pinyin": "qlxmzaqyzc",
        "q": [0, 6],
        "x": [2],
        "y": [7],
        "z": [4, 8]
    }, {
        "c": [3],
        "chinese": "滩忘募衬",
        "id": 697,
        "length": 4,
        "m": [2],
        "pinyin": "twmc",
        "t": [0],
        "w": [1]
    }, {
        "chinese": "稽蜗欧撒暂",
        "id": 698,
        "j": [0],
        "length": 5,
        "o": [2],
        "pinyin": "jwosz",
        "s": [3],
        "w": [1],
        "z": [4]
    }, {
        "c": [0, 7],
        "chinese": "采无瞪闲轮朱余淬诈",
        "d": [2],
        "id": 699,
        "l": [4],
        "length": 9,
        "pinyin": "cwdxlzycz",
        "w": [1],
        "x": [3],
        "y": [6],
        "z": [5, 8]
    }, {
        "chinese": "腰墟蔷欢消缎饲签鸳礁",
        "d": [5],
        "h": [3],
        "id": 700,
        "j": [9],
        "length": 10,
        "pinyin": "yxqhxdsqyj",
        "q": [2, 7],
        "s": [6],
        "x": [1, 4],
        "y": [0, 8]
    }, {
        "b": [3],
        "chinese": "砒扩扦拌荔驮葫阔柒捏",
        "h": [6],
        "id": 701,
        "k": [1, 7],
        "l": [4],
        "length": 10,
        "n": [9],
        "p": [0],
        "pinyin": "pkqblthkqn",
        "q": [2, 8],
        "t": [5]
    }, {
        "chinese": "漾削港杭涅菇瓜",
        "g": [2, 5, 6],
        "h": [3],
        "id": 702,
        "length": 7,
        "n": [4],
        "pinyin": "yxghngg",
        "x": [1],
        "y": [0]
    }, {
        "chinese": "喀志享亩芥楔坠",
        "id": 703,
        "j": [4],
        "k": [0],
        "length": 7,
        "m": [3],
        "pinyin": "kzxmjxz",
        "x": [2, 5],
        "z": [1, 6]
    }, {
        "chinese": "赵翘雅二",
        "e": [3],
        "id": 704,
        "length": 4,
        "pinyin": "zqye",
        "q": [1],
        "y": [2],
        "z": [0]
    }, {
        "b": [1],
        "c": [8],
        "chinese": "仆毖减伊玛蕊漆漾疮耶",
        "id": 705,
        "j": [2],
        "length": 10,
        "m": [4],
        "p": [0],
        "pinyin": "pbjymrqycy",
        "q": [6],
        "r": [5],
        "y": [3, 7, 9]
    }, {
        "chinese": "只兴召毋籽宜但亿肋",
        "d": [6],
        "id": 706,
        "l": [8],
        "length": 9,
        "pinyin": "zxzwzydyl",
        "w": [3],
        "x": [1],
        "y": [5, 7],
        "z": [0, 2, 4]
    }, {
        "b": [7, 8],
        "chinese": "忿绒殖遣恋悉剔鳖巴釉瞒",
        "f": [0],
        "id": 707,
        "l": [4],
        "length": 11,
        "m": [10],
        "pinyin": "frzqlxtbbym",
        "q": [3],
        "r": [1],
        "t": [6],
        "x": [5],
        "y": [9],
        "z": [2]
    }, {
        "c": [3],
        "chinese": "娩诲政诚",
        "h": [1],
        "id": 708,
        "length": 4,
        "m": [0],
        "pinyin": "mhzc",
        "z": [2]
    }, {
        "b": [4],
        "chinese": "雇致挽凌苞理",
        "g": [0],
        "id": 709,
        "l": [3, 5],
        "length": 6,
        "pinyin": "gzwlbl",
        "w": [2],
        "z": [1]
    }, {
        "chinese": "毯饺妈品",
        "id": 710,
        "j": [1],
        "length": 4,
        "m": [2],
        "p": [3],
        "pinyin": "tjmp",
        "t": [0]
    }, {
        "a": [3],
        "b": [5],
        "chinese": "娠锐绕暗室棒赌附瓶",
        "d": [6],
        "f": [7],
        "id": 711,
        "length": 9,
        "p": [8],
        "pinyin": "srrasbdfp",
        "r": [1, 2],
        "s": [0, 4]
    }, {
        "c": [0],
        "chinese": "搐邻汹汇疚",
        "h": [3],
        "id": 712,
        "j": [4],
        "l": [1],
        "length": 5,
        "pinyin": "clxhj",
        "x": [2]
    }, {
        "chinese": "裹酒鲸植",
        "g": [0],
        "id": 713,
        "j": [1, 2],
        "length": 4,
        "pinyin": "gjjz",
        "z": [3]
    }, {
        "c": [0],
        "chinese": "碴孝圭黔",
        "g": [2],
        "id": 714,
        "length": 4,
        "pinyin": "cxgq",
        "q": [3],
        "x": [1]
    }, {
        "c": [9],
        "chinese": "彰淹仑刨殆也构渍激椎蜂",
        "d": [4],
        "f": [10],
        "g": [6],
        "id": 715,
        "j": [8],
        "l": [2],
        "length": 11,
        "p": [3],
        "pinyin": "zylpdygzjcf",
        "y": [1, 5],
        "z": [0, 7]
    }, {
        "chinese": "源夏淑绣",
        "id": 716,
        "length": 4,
        "pinyin": "yxsx",
        "s": [2],
        "x": [1, 3],
        "y": [0]
    }, {
        "chinese": "疚县逗田琴舰",
        "d": [2],
        "id": 717,
        "j": [0, 5],
        "length": 6,
        "pinyin": "jxdtqj",
        "q": [4],
        "t": [3],
        "x": [1]
    }, {
        "b": [1],
        "c": [0, 4],
        "chinese": "茶靶刨怂蝉悉注",
        "id": 718,
        "length": 7,
        "p": [2],
        "pinyin": "cbpscxz",
        "s": [3],
        "x": [5],
        "z": [6]
    }, {
        "chinese": "恐赛甚束泥衔网签赂",
        "id": 719,
        "k": [0],
        "l": [8],
        "length": 9,
        "n": [4],
        "pinyin": "ksssnxwql",
        "q": [7],
        "s": [1, 2, 3],
        "w": [6],
        "x": [5]
    }, {
        "b": [7],
        "chinese": "蛹檬今膳意氓血白犊",
        "d": [8],
        "id": 720,
        "j": [2],
        "length": 9,
        "m": [1, 5],
        "pinyin": "ymjsymxbd",
        "s": [3],
        "x": [6],
        "y": [0, 4]
    }, {
        "c": [0],
        "chinese": "灿稼榆越启鲜炉艳趣",
        "id": 721,
        "j": [1],
        "l": [6],
        "length": 9,
        "pinyin": "cjyyqxlyq",
        "q": [4, 8],
        "x": [5],
        "y": [2, 3, 7]
    }, {
        "c": [4],
        "chinese": "壮楞育迭成昭私谦试",
        "d": [3],
        "id": 722,
        "l": [1],
        "length": 9,
        "pinyin": "zlydczsqs",
        "q": [7],
        "s": [6, 8],
        "y": [2],
        "z": [0, 5]
    }, {
        "chinese": "棺邻椰傅剃霉鹰整剖",
        "f": [3],
        "g": [0],
        "id": 723,
        "l": [1],
        "length": 9,
        "m": [5],
        "p": [8],
        "pinyin": "glyftmyzp",
        "t": [4],
        "y": [2, 6],
        "z": [7]
    }, {
        "c": [0, 7],
        "chinese": "川侗童蔬千尔府蝉",
        "d": [1],
        "e": [5],
        "f": [6],
        "id": 724,
        "length": 8,
        "pinyin": "cdtsqefc",
        "q": [4],
        "s": [3],
        "t": [2]
    }, {
        "c": [2],
        "chinese": "暇挥钞镶",
        "h": [1],
        "id": 725,
        "length": 4,
        "pinyin": "xhcx",
        "x": [0, 3]
    }, {
        "chinese": "绍攻览吐",
        "g": [1],
        "id": 726,
        "l": [2],
        "length": 4,
        "pinyin": "sglt",
        "s": [0],
        "t": [3]
    }, {
        "c": [2, 5],
        "chinese": "荐躲伺宜叫秤痈刊",
        "d": [1],
        "id": 727,
        "j": [0, 4],
        "k": [7],
        "length": 8,
        "pinyin": "jdcyjcyk",
        "y": [3, 6]
    }, {
        "c": [1],
        "chinese": "掌曾寒蹲济框",
        "d": [3],
        "h": [2],
        "id": 728,
        "j": [4],
        "k": [5],
        "length": 6,
        "pinyin": "zchdjk",
        "z": [0]
    }, {
        "c": [3],
        "chinese": "链叔碉闯俞琳优烷仲朴",
        "d": [2],
        "id": 729,
        "l": [0, 5],
        "length": 10,
        "p": [9],
        "pinyin": "lsdcylywzp",
        "s": [1],
        "w": [7],
        "y": [4, 6],
        "z": [8]
    }, {
        "b": [0],
        "c": [3],
        "chinese": "彼甜傅初换",
        "f": [2],
        "h": [4],
        "id": 730,
        "length": 5,
        "pinyin": "btfch",
        "t": [1]
    }, {
        "c": [3],
        "chinese": "响严冉掣",
        "id": 731,
        "length": 4,
        "pinyin": "xyrc",
        "r": [2],
        "x": [0],
        "y": [1]
    }, {
        "c": [2, 4, 6],
        "chinese": "溪问辰荡闯支嘲扶瓮",
        "d": [3],
        "f": [7],
        "id": 732,
        "length": 9,
        "pinyin": "xwcdczcfw",
        "w": [1, 8],
        "x": [0],
        "z": [5]
    }, {
        "b": [4],
        "chinese": "姬炙瞄阑玻掠庙景际企鸿",
        "h": [10],
        "id": 733,
        "j": [0, 7, 8],
        "l": [3, 5],
        "length": 11,
        "m": [2, 6],
        "pinyin": "jzmlblmjjqh",
        "q": [9],
        "z": [1]
    }, {
        "b": [3],
        "chinese": "抿耘吉彬任",
        "id": 734,
        "j": [2],
        "length": 5,
        "m": [0],
        "pinyin": "myjbr",
        "r": [4],
        "y": [1]
    }, {
        "chinese": "桓迈武较佳漏谅挎茸",
        "h": [0],
        "id": 735,
        "j": [3, 4],
        "k": [7],
        "l": [5, 6],
        "length": 9,
        "m": [1],
        "pinyin": "hmwjjllkr",
        "r": [8],
        "w": [2]
    }, {
        "chinese": "蘑接毫攀",
        "h": [2],
        "id": 736,
        "j": [1],
        "length": 4,
        "m": [0],
        "p": [3],
        "pinyin": "mjhp"
    }, {
        "b": [4],
        "c": [7],
        "chinese": "绦疏妈进弊减叫驰弥桔",
        "id": 737,
        "j": [3, 5, 6, 9],
        "length": 10,
        "m": [2, 8],
        "pinyin": "tsmjbjjcmj",
        "s": [1],
        "t": [0]
    }, {
        "chinese": "蛛涨颇涤",
        "d": [3],
        "id": 738,
        "length": 4,
        "p": [2],
        "pinyin": "zzpd",
        "z": [0, 1]
    }, {
        "c": [2],
        "chinese": "下特敞珊掠胰屿苦颂打僳",
        "d": [9],
        "id": 739,
        "k": [7],
        "l": [4],
        "length": 11,
        "pinyin": "xtcslyyksds",
        "s": [3, 8, 10],
        "t": [1],
        "x": [0],
        "y": [5, 6]
    }, {
        "chinese": "彰丫悦缀",
        "id": 740,
        "length": 4,
        "pinyin": "zyyz",
        "y": [1, 2],
        "z": [0, 3]
    }, {
        "c": [3, 6, 8],
        "chinese": "委抢判陈庚销畴丘疮稍舀",
        "g": [4],
        "id": 741,
        "length": 11,
        "p": [2],
        "pinyin": "wqpcgxcqcsy",
        "q": [1, 7],
        "s": [9],
        "w": [0],
        "x": [5],
        "y": [10]
    }, {
        "c": [3],
        "chinese": "约曝拾臭孺磐肯谰衰躺",
        "id": 742,
        "k": [6],
        "l": [7],
        "length": 10,
        "p": [1, 5],
        "pinyin": "ypscrpklst",
        "r": [4],
        "s": [2, 8],
        "t": [9],
        "y": [0]
    }, {
        "c": [8],
        "chinese": "嫡酵拂痒捂萄委征搀",
        "d": [0],
        "f": [2],
        "id": 743,
        "j": [1],
        "length": 9,
        "pinyin": "djfywtwzc",
        "t": [5],
        "w": [4, 6],
        "y": [3],
        "z": [7]
    }, {
        "chinese": "致邵欺俘狠主",
        "f": [3],
        "h": [4],
        "id": 744,
        "length": 6,
        "pinyin": "zsqfhz",
        "q": [2],
        "s": [1],
        "z": [0, 5]
    }, {
        "c": [1, 9],
        "chinese": "闲丛镶诉峨襄烬恤届雏收",
        "e": [4],
        "id": 745,
        "j": [6, 8],
        "length": 11,
        "pinyin": "xcxsexjxjcs",
        "s": [3, 10],
        "x": [0, 2, 5, 7]
    }, {
        "b": [3],
        "chinese": "刘稍灵表披羔呸",
        "g": [5],
        "id": 746,
        "l": [0, 2],
        "length": 7,
        "p": [4, 6],
        "pinyin": "lslbpgp",
        "s": [1]
    }, {
        "b": [2, 6],
        "c": [3],
        "chinese": "戎蚁碧愁甲盅剥透",
        "id": 747,
        "j": [4],
        "length": 8,
        "pinyin": "rybcjzbt",
        "r": [0],
        "t": [7],
        "y": [1],
        "z": [5]
    }, {
        "c": [7],
        "chinese": "进倾辐仪讲颐供敞",
        "f": [2],
        "g": [6],
        "id": 748,
        "j": [0, 4],
        "length": 8,
        "pinyin": "jqfyjygc",
        "q": [1],
        "y": [3, 5]
    }, {
        "c": [0, 4],
        "chinese": "矗仟偶萤才",
        "id": 749,
        "length": 5,
        "o": [2],
        "pinyin": "cqoyc",
        "q": [1],
        "y": [3]
    }, {
        "c": [5],
        "chinese": "问蟹殖堂晕雌",
        "id": 750,
        "length": 6,
        "pinyin": "wxztyc",
        "t": [3],
        "w": [0],
        "x": [1],
        "y": [4],
        "z": [2]
    }, {
        "b": [3],
        "c": [4],
        "chinese": "俞隶甚跋词",
        "id": 751,
        "l": [1],
        "length": 5,
        "pinyin": "ylsbc",
        "s": [2],
        "y": [0]
    }, {
        "b": [4],
        "c": [1, 6],
        "chinese": "指吵噬仗奔姥淬窑",
        "id": 752,
        "l": [5],
        "length": 8,
        "pinyin": "zcszblcy",
        "s": [2],
        "y": [7],
        "z": [0, 3]
    }, {
        "b": [1],
        "c": [0],
        "chinese": "翅必小混丫否抿",
        "f": [5],
        "h": [3],
        "id": 753,
        "length": 7,
        "m": [6],
        "pinyin": "cbxhyfm",
        "x": [2],
        "y": [4]
    }, {
        "c": [0, 3],
        "chinese": "厨携鞋辞钎菏嫂幕蒋蒙",
        "h": [5],
        "id": 754,
        "j": [8],
        "length": 10,
        "m": [7, 9],
        "pinyin": "cxxcqhsmjm",
        "q": [4],
        "s": [6],
        "x": [1, 2]
    }, {
        "chinese": "汛牛日帝",
        "d": [3],
        "id": 755,
        "length": 4,
        "n": [1],
        "pinyin": "xnrd",
        "r": [2],
        "x": [0]
    }, {
        "chinese": "叼鸦了未剿扔蛀",
        "d": [0],
        "id": 756,
        "j": [4],
        "l": [2],
        "length": 7,
        "pinyin": "dylwjrz",
        "r": [5],
        "w": [3],
        "y": [1],
        "z": [6]
    }, {
        "b": [9],
        "chinese": "甫导咱解缅痉行汲符卞",
        "d": [1],
        "f": [0, 8],
        "id": 757,
        "j": [3, 5, 7],
        "length": 10,
        "m": [4],
        "pinyin": "fdzjmjxjfb",
        "x": [6],
        "z": [2]
    }, {
        "b": [6],
        "c": [5],
        "chinese": "徘摩旨镰藕船棒析乐晶",
        "id": 758,
        "j": [9],
        "l": [3, 8],
        "length": 10,
        "m": [1],
        "o": [4],
        "p": [0],
        "pinyin": "pmzlocbxlj",
        "x": [7],
        "z": [2]
    }, {
        "chinese": "颖丽壬契注",
        "id": 759,
        "l": [1],
        "length": 5,
        "pinyin": "ylrqz",
        "q": [3],
        "r": [2],
        "y": [0],
        "z": [4]
    }, {
        "a": [6],
        "b": [2],
        "chinese": "庄僚拌冀睡砂碍茵东谆",
        "d": [8],
        "id": 760,
        "j": [3],
        "l": [1],
        "length": 10,
        "pinyin": "zlbjssaydz",
        "s": [4, 5],
        "y": [7],
        "z": [0, 9]
    }, {
        "chinese": "星蚜罗握驮馆衣增减",
        "g": [5],
        "id": 761,
        "j": [8],
        "l": [2],
        "length": 9,
        "pinyin": "xylwtgyzj",
        "t": [4],
        "w": [3],
        "x": [0],
        "y": [1, 6],
        "z": [7]
    }, {
        "b": [2],
        "c": [3],
        "chinese": "吝毡箔颤园权代",
        "d": [6],
        "id": 762,
        "l": [0],
        "length": 7,
        "pinyin": "lzbcyqd",
        "q": [5],
        "y": [4],
        "z": [1]
    }, {
        "b": [3],
        "chinese": "郧夫昨搬股有",
        "f": [1],
        "g": [4],
        "id": 763,
        "length": 6,
        "pinyin": "yfzbgy",
        "y": [0, 5],
        "z": [2]
    }, {
        "b": [1, 8],
        "c": [3],
        "chinese": "销怖奠唇馒皆实现彼",
        "d": [2],
        "id": 764,
        "j": [5],
        "length": 9,
        "m": [4],
        "pinyin": "xbdcmjsxb",
        "s": [6],
        "x": [0, 7]
    }, {
        "c": [3],
        "chinese": "元县石蹭曼",
        "id": 765,
        "length": 5,
        "m": [4],
        "pinyin": "yxscm",
        "s": [2],
        "x": [1],
        "y": [0]
    }, {
        "chinese": "销畏邢郊",
        "id": 766,
        "j": [3],
        "length": 4,
        "pinyin": "xwxj",
        "w": [1],
        "x": [0, 2]
    }, {
        "b": [0, 2, 8],
        "c": [7],
        "chinese": "蓖幸悲途捎泣垮潮秉",
        "id": 767,
        "k": [6],
        "length": 9,
        "pinyin": "bxbtsqkcb",
        "q": [5],
        "s": [4],
        "t": [3],
        "x": [1]
    }, {
        "c": [3],
        "chinese": "躯亦迁磋癣铃",
        "id": 768,
        "l": [5],
        "length": 6,
        "pinyin": "qyqcxl",
        "q": [0, 2],
        "x": [4],
        "y": [1]
    }, {
        "chinese": "缄慢要忧圭妖娩爬",
        "g": [4],
        "id": 769,
        "j": [0],
        "length": 8,
        "m": [1, 6],
        "p": [7],
        "pinyin": "jmyygymp",
        "y": [2, 3, 5]
    }, {
        "chinese": "阮尊洞郧呀侠证",
        "d": [2],
        "id": 770,
        "length": 7,
        "pinyin": "rzdyyxz",
        "r": [0],
        "x": [5],
        "y": [3, 4],
        "z": [1, 6]
    }, {
        "chinese": "剧拼矣显览洲颓釜",
        "f": [7],
        "id": 771,
        "j": [0],
        "l": [4],
        "length": 8,
        "p": [1],
        "pinyin": "jpyxlztf",
        "t": [6],
        "x": [3],
        "y": [2],
        "z": [5]
    }, {
        "chinese": "脉罕做茧妓米尼",
        "h": [1],
        "id": 772,
        "j": [3, 4],
        "length": 7,
        "m": [0, 5],
        "n": [6],
        "pinyin": "mhzjjmn",
        "z": [2]
    }, {
        "b": [4],
        "chinese": "诌沥胆否丙固驯",
        "d": [2],
        "f": [3],
        "g": [5],
        "id": 773,
        "l": [1],
        "length": 7,
        "pinyin": "zldfbgx",
        "x": [6],
        "z": [0]
    }, {
        "chinese": "莎殖锯曼",
        "id": 774,
        "j": [2],
        "length": 4,
        "m": [3],
        "pinyin": "szjm",
        "s": [0],
        "z": [1]
    }, {
        "chinese": "明灶行吱漱幅厉眷盐桂直",
        "f": [5],
        "g": [9],
        "id": 775,
        "j": [7],
        "l": [6],
        "length": 11,
        "m": [0],
        "pinyin": "mzxzsfljygz",
        "s": [4],
        "x": [2],
        "y": [8],
        "z": [1, 3, 10]
    }, {
        "chinese": "寡晤孜伟抨夫胸襄掂",
        "d": [8],
        "f": [5],
        "g": [0],
        "id": 776,
        "length": 9,
        "p": [4],
        "pinyin": "gwzwpfxxd",
        "w": [1, 3],
        "x": [6, 7],
        "z": [2]
    }, {
        "chinese": "乙家啪撬祖撼巷卉祸校",
        "h": [5, 7, 8],
        "id": 777,
        "j": [1],
        "length": 10,
        "p": [2],
        "pinyin": "yjpqzhxhhx",
        "q": [3],
        "x": [6, 9],
        "y": [0],
        "z": [4]
    }, {
        "c": [2],
        "chinese": "鲜慌灿冀卫散脐弗",
        "f": [7],
        "h": [1],
        "id": 778,
        "j": [3],
        "length": 8,
        "pinyin": "xhcjwsqf",
        "q": [6],
        "s": [5],
        "w": [4],
        "x": [0]
    }, {
        "chinese": "辕贮碉东孕献覆闰仿",
        "d": [2, 3],
        "f": [6, 8],
        "id": 779,
        "length": 9,
        "pinyin": "yzddyxfrf",
        "r": [7],
        "x": [5],
        "y": [0, 4],
        "z": [1]
    }, {
        "chinese": "植纠蹲脚威捂鹤寓",
        "d": [2],
        "h": [6],
        "id": 780,
        "j": [1, 3],
        "length": 8,
        "pinyin": "zjdjwwhy",
        "w": [4, 5],
        "y": [7],
        "z": [0]
    }, {
        "c": [3],
        "chinese": "旦拯沼掺撩酞郎嚷魂挡铰",
        "d": [0, 9],
        "h": [8],
        "id": 781,
        "j": [10],
        "l": [4, 6],
        "length": 11,
        "pinyin": "dzzcltlrhdj",
        "r": [7],
        "t": [5],
        "z": [1, 2]
    }, {
        "c": [1, 2],
        "chinese": "滞柴仓蹄",
        "id": 782,
        "length": 4,
        "pinyin": "zcct",
        "t": [3],
        "z": [0]
    }, {
        "b": [1],
        "c": [3],
        "chinese": "禽辨袭葱拷儿诊朗隙鉴",
        "e": [5],
        "id": 783,
        "j": [9],
        "k": [4],
        "l": [7],
        "length": 10,
        "pinyin": "qbxckezlxj",
        "q": [0],
        "x": [2, 8],
        "z": [6]
    }, {
        "chinese": "颖汹够诀赛惠熟",
        "g": [2],
        "h": [5],
        "id": 784,
        "j": [3],
        "length": 7,
        "pinyin": "yxgjshs",
        "s": [4, 6],
        "x": [1],
        "y": [0]
    }, {
        "c": [1, 7],
        "chinese": "副吹鲤惠浑甘霓撮菱赦",
        "f": [0],
        "g": [5],
        "h": [3, 4],
        "id": 785,
        "l": [2, 8],
        "length": 10,
        "n": [6],
        "pinyin": "fclhhgncls",
        "s": [9]
    }, {
        "c": [6],
        "chinese": "没傅宰圃屹粤踩",
        "f": [1],
        "id": 786,
        "length": 7,
        "m": [0],
        "p": [3],
        "pinyin": "mfzpyyc",
        "y": [4, 5],
        "z": [2]
    }, {
        "chinese": "荔者躬龋烘夹畸镀",
        "d": [7],
        "g": [2],
        "h": [4],
        "id": 787,
        "j": [5, 6],
        "l": [0],
        "length": 8,
        "pinyin": "lzgqhjjd",
        "q": [3],
        "z": [1]
    }, {
        "chinese": "昭糕惹转诺芍诽涂",
        "f": [6],
        "g": [1],
        "id": 788,
        "length": 8,
        "n": [4],
        "pinyin": "zgrznsft",
        "r": [2],
        "s": [5],
        "t": [7],
        "z": [0, 3]
    }, {
        "chinese": "敷糟壳账鲤愚瑚逗",
        "d": [7],
        "f": [0],
        "h": [6],
        "id": 789,
        "k": [2],
        "l": [4],
        "length": 8,
        "pinyin": "fzkzlyhd",
        "y": [5],
        "z": [1, 3]
    }, {
        "c": [1],
        "chinese": "伤错窖兰久破掷",
        "id": 790,
        "j": [2, 4],
        "l": [3],
        "length": 7,
        "p": [5],
        "pinyin": "scjljpz",
        "s": [0],
        "z": [6]
    }, {
        "chinese": "溺伍脸诛研泼",
        "id": 791,
        "l": [2],
        "length": 6,
        "n": [0],
        "p": [5],
        "pinyin": "nwlzyp",
        "w": [1],
        "y": [4],
        "z": [3]
    }, {
        "c": [7],
        "chinese": "只个轮衰丹寨节沧",
        "d": [4],
        "g": [1],
        "id": 792,
        "j": [6],
        "l": [2],
        "length": 8,
        "pinyin": "zglsdzjc",
        "s": [3],
        "z": [0, 5]
    }, {
        "b": [2],
        "chinese": "炔功吧膨",
        "g": [0, 1],
        "id": 793,
        "length": 4,
        "p": [3],
        "pinyin": "ggbp"
    }, {
        "c": [1],
        "chinese": "最厂汉臻模瘫曙",
        "h": [2],
        "id": 794,
        "length": 7,
        "m": [4],
        "pinyin": "zchzmts",
        "s": [6],
        "t": [5],
        "z": [0, 3]
    }, {
        "chinese": "熄菱孜洲宜",
        "id": 795,
        "l": [1],
        "length": 5,
        "pinyin": "xlzzy",
        "x": [0],
        "y": [4],
        "z": [2, 3]
    }, {
        "chinese": "穗券跳啪",
        "id": 796,
        "length": 4,
        "p": [3],
        "pinyin": "sqtp",
        "q": [1],
        "s": [0],
        "t": [2]
    }, {
        "b": [0],
        "c": [1],
        "chinese": "备粹幌淌",
        "h": [2],
        "id": 797,
        "length": 4,
        "pinyin": "bcht",
        "t": [3]
    }, {
        "chinese": "栏撇世冬傣哪陇",
        "d": [3, 4],
        "id": 798,
        "l": [0, 6],
        "length": 7,
        "n": [5],
        "p": [1],
        "pinyin": "lpsddnl",
        "s": [2]
    }, {
        "chinese": "胸窃精噬钥",
        "id": 799,
        "j": [2],
        "length": 5,
        "pinyin": "xqjsy",
        "q": [1],
        "s": [3],
        "x": [0],
        "y": [4]
    }, {
        "b": [2, 6],
        "chinese": "派票迸害亥蕊宾览削执",
        "h": [3, 4],
        "id": 800,
        "l": [7],
        "length": 10,
        "p": [0, 1],
        "pinyin": "ppbhhrblxz",
        "r": [5],
        "x": [8],
        "z": [9]
    }, {
        "chinese": "资彰吓狠",
        "h": [3],
        "id": 801,
        "length": 4,
        "pinyin": "zzxh",
        "x": [2],
        "z": [0, 1]
    }, {
        "chinese": "胃争劝钠娥世厉桐侗丢",
        "d": [8, 9],
        "e": [4],
        "id": 802,
        "l": [6],
        "length": 10,
        "n": [3],
        "pinyin": "wzqnesltdd",
        "q": [2],
        "s": [5],
        "t": [7],
        "w": [0],
        "z": [1]
    }, {
        "a": [0],
        "chinese": "爱伐瓢圆近效鸿匿玫",
        "f": [1],
        "h": [6],
        "id": 803,
        "j": [4],
        "length": 9,
        "m": [8],
        "n": [7],
        "p": [2],
        "pinyin": "afpyjxhnm",
        "x": [5],
        "y": [3]
    }, {
        "chinese": "漓烩悉炉抒稻",
        "d": [5],
        "h": [1],
        "id": 804,
        "l": [0, 3],
        "length": 6,
        "pinyin": "lhxlsd",
        "s": [4],
        "x": [2]
    }, {
        "b": [5],
        "chinese": "瓤铃讹咕剿陛",
        "e": [2],
        "g": [3],
        "id": 805,
        "j": [4],
        "l": [1],
        "length": 6,
        "pinyin": "rlegjb",
        "r": [0]
    }, {
        "b": [0],
        "chinese": "冰青坪舞酋肋",
        "id": 806,
        "l": [5],
        "length": 6,
        "p": [2],
        "pinyin": "bqpwql",
        "q": [1, 4],
        "w": [3]
    }, {
        "b": [0],
        "chinese": "办亦届犯隆闲茅正攒",
        "f": [3],
        "id": 807,
        "j": [2],
        "l": [4],
        "length": 9,
        "m": [6],
        "pinyin": "byjflxmzz",
        "x": [5],
        "y": [1],
        "z": [7, 8]
    }, {
        "c": [2],
        "chinese": "芥赢茬炭卤彤邪钎颜抓歪",
        "id": 808,
        "j": [0],
        "l": [4],
        "length": 11,
        "pinyin": "jyctltxqyzw",
        "q": [7],
        "t": [3, 5],
        "w": [10],
        "x": [6],
        "y": [1, 8],
        "z": [9]
    }, {
        "chinese": "娃饿惹腐喳削窄噪",
        "e": [1],
        "f": [3],
        "id": 809,
        "length": 8,
        "pinyin": "werfzxzz",
        "r": [2],
        "w": [0],
        "x": [5],
        "z": [4, 6, 7]
    }, {
        "b": [7],
        "chinese": "敷冉袖扛植甄之雹",
        "f": [0],
        "id": 810,
        "k": [3],
        "length": 8,
        "pinyin": "frxkzzzb",
        "r": [1],
        "x": [2],
        "z": [4, 5, 6]
    }, {
        "chinese": "叹滔峡沃谨喜",
        "id": 811,
        "j": [4],
        "length": 6,
        "pinyin": "ttxwjx",
        "t": [0, 1],
        "w": [3],
        "x": [2, 5]
    }, {
        "chinese": "盲僚渭过围众阶亏",
        "g": [3],
        "id": 812,
        "j": [6],
        "k": [7],
        "l": [1],
        "length": 8,
        "m": [0],
        "pinyin": "mlwgwzjk",
        "w": [2, 4],
        "z": [5]
    }, {
        "c": [2],
        "chinese": "舒贤仇段盟玄",
        "d": [3],
        "id": 813,
        "length": 6,
        "m": [4],
        "pinyin": "sxcdmx",
        "s": [0],
        "x": [1, 5]
    }, {
        "chinese": "岭晶冈霄滥闹蕴遁堑驯",
        "d": [7],
        "g": [2],
        "id": 814,
        "j": [1],
        "l": [0, 4],
        "length": 10,
        "n": [5],
        "pinyin": "ljgxlnydqx",
        "q": [8],
        "x": [3, 9],
        "y": [6]
    }, {
        "c": [0],
        "chinese": "裁住凭纪当如猿饶糟市",
        "d": [4],
        "id": 815,
        "j": [3],
        "length": 10,
        "p": [2],
        "pinyin": "czpjdryrzs",
        "r": [5, 7],
        "s": [9],
        "y": [6],
        "z": [1, 8]
    }, {
        "chinese": "里份史晦",
        "f": [1],
        "h": [3],
        "id": 816,
        "l": [0],
        "length": 4,
        "pinyin": "lfsh",
        "s": [2]
    }, {
        "b": [1],
        "chinese": "浚白质到赫咨语御",
        "d": [3],
        "h": [4],
        "id": 817,
        "j": [0],
        "length": 8,
        "pinyin": "jbzdhzyy",
        "y": [6, 7],
        "z": [2, 5]
    }, {
        "c": [2, 7],
        "chinese": "线瘸成彤景叶棱橙骇惋",
        "h": [8],
        "id": 818,
        "j": [4],
        "l": [6],
        "length": 10,
        "pinyin": "xqctjylchw",
        "q": [1],
        "t": [3],
        "w": [9],
        "x": [0],
        "y": [5]
    }, {
        "chinese": "真吝着些",
        "id": 819,
        "l": [1],
        "length": 4,
        "pinyin": "zlzx",
        "x": [3],
        "z": [0, 2]
    }, {
        "c": [2],
        "chinese": "姥汤郴职盘依",
        "id": 820,
        "l": [0],
        "length": 6,
        "p": [4],
        "pinyin": "ltczpy",
        "t": [1],
        "y": [5],
        "z": [3]
    }, {
        "b": [0],
        "chinese": "佰凌霹戊讲府",
        "f": [5],
        "id": 821,
        "j": [4],
        "l": [1],
        "length": 6,
        "p": [2],
        "pinyin": "blpwjf",
        "w": [3]
    }, {
        "b": [0],
        "chinese": "碧潜酷浅鸣",
        "id": 822,
        "k": [2],
        "length": 5,
        "m": [4],
        "pinyin": "bqkqm",
        "q": [1, 3]
    }, {
        "c": [1],
        "chinese": "钢蹭敛奎荧时躬功",
        "g": [0, 6, 7],
        "id": 823,
        "k": [3],
        "l": [2],
        "length": 8,
        "pinyin": "gclkysgg",
        "s": [5],
        "y": [4]
    }, {
        "chinese": "青臃瑟琢",
        "id": 824,
        "length": 4,
        "pinyin": "qysz",
        "q": [0],
        "s": [2],
        "y": [1],
        "z": [3]
    }, {
        "chinese": "卷缄窃獭估慕函熊",
        "g": [4],
        "h": [6],
        "id": 825,
        "j": [0, 1],
        "length": 8,
        "m": [5],
        "pinyin": "jjqtgmhx",
        "q": [2],
        "t": [3],
        "x": [7]
    }, {
        "c": [5],
        "chinese": "乔跳帐睹呛侧骇铜柯丧",
        "d": [3],
        "h": [6],
        "id": 826,
        "k": [8],
        "length": 10,
        "pinyin": "qtzdqchtks",
        "q": [0, 4],
        "s": [9],
        "t": [1, 7],
        "z": [2]
    }, {
        "chinese": "兴伏勋揭磊靛暮冤涣蛛玩",
        "d": [5],
        "f": [1],
        "h": [8],
        "id": 827,
        "j": [3],
        "l": [4],
        "length": 11,
        "m": [6],
        "pinyin": "xfxjldmyhzw",
        "w": [10],
        "x": [0, 2],
        "y": [7],
        "z": [9]
    }, {
        "c": [0],
        "chinese": "车铰耐叙佃",
        "d": [4],
        "id": 828,
        "j": [1],
        "length": 5,
        "n": [2],
        "pinyin": "cjnxd",
        "x": [3]
    }, {
        "a": [4],
        "chinese": "钧书龙网哀藐袍",
        "id": 829,
        "j": [0],
        "l": [2],
        "length": 7,
        "m": [5],
        "p": [6],
        "pinyin": "jslwamp",
        "s": [1],
        "w": [3]
    }, {
        "chinese": "奇甜薛俊奠嗜",
        "d": [4],
        "id": 830,
        "j": [3],
        "length": 6,
        "pinyin": "qtxjds",
        "q": [0],
        "s": [5],
        "t": [1],
        "x": [2]
    }, {
        "chinese": "岳售毡倪重",
        "id": 831,
        "length": 5,
        "n": [3],
        "pinyin": "ysznz",
        "s": [1],
        "y": [0],
        "z": [2, 4]
    }, {
        "chinese": "甘纹待荷拿斗翔途受翘们",
        "d": [2, 5],
        "g": [0],
        "h": [3],
        "id": 832,
        "length": 11,
        "m": [10],
        "n": [4],
        "pinyin": "gwdhndxtsqm",
        "q": [9],
        "s": [8],
        "t": [7],
        "w": [1],
        "x": [6]
    }, {
        "c": [4],
        "chinese": "换畔烯铆蝉撅筷穗",
        "h": [0],
        "id": 833,
        "j": [5],
        "k": [6],
        "length": 8,
        "m": [3],
        "p": [1],
        "pinyin": "hpxmcjks",
        "s": [7],
        "x": [2]
    }, {
        "chinese": "犁孽栋擅欲颇奏蛾掉兜",
        "d": [2, 8, 9],
        "e": [7],
        "id": 834,
        "l": [0],
        "length": 10,
        "n": [1],
        "p": [5],
        "pinyin": "lndsypzedd",
        "s": [3],
        "y": [4],
        "z": [6]
    }, {
        "b": [0, 8],
        "chinese": "膊殿津匙婚蓝惰腐闭筑",
        "d": [1, 6],
        "f": [7],
        "h": [4],
        "id": 835,
        "j": [2],
        "l": [5],
        "length": 10,
        "pinyin": "bdjshldfbz",
        "s": [3],
        "z": [9]
    }, {
        "chinese": "码董起么情",
        "d": [1],
        "id": 836,
        "length": 5,
        "m": [0, 3],
        "pinyin": "mdqmq",
        "q": [2, 4]
    }, {
        "chinese": "窥杨说检宴撞座",
        "id": 837,
        "j": [3],
        "k": [0],
        "length": 7,
        "pinyin": "kysjyzz",
        "s": [2],
        "y": [1, 4],
        "z": [5, 6]
    }, {
        "chinese": "舌彭霍幕窥添佐又筛",
        "h": [2],
        "id": 838,
        "k": [4],
        "length": 9,
        "m": [3],
        "p": [1],
        "pinyin": "sphmktzys",
        "s": [0, 8],
        "t": [5],
        "y": [7],
        "z": [6]
    }, {
        "b": [2],
        "chinese": "郡预波谓礼淆仗醚",
        "id": 839,
        "j": [0],
        "l": [4],
        "length": 8,
        "m": [7],
        "pinyin": "jybwlxzm",
        "w": [3],
        "x": [5],
        "y": [1],
        "z": [6]
    }, {
        "chinese": "失舟涝沿",
        "id": 840,
        "l": [2],
        "length": 4,
        "pinyin": "szly",
        "s": [0],
        "y": [3],
        "z": [1]
    }, {
        "a": [3],
        "chinese": "醚径乓癌迂悍教墒",
        "h": [5],
        "id": 841,
        "j": [1, 6],
        "length": 8,
        "m": [0],
        "p": [2],
        "pinyin": "mjpayhjs",
        "s": [7],
        "y": [4]
    }, {
        "c": [1],
        "chinese": "牲幢恍铜舰站燕",
        "h": [2],
        "id": 842,
        "j": [4],
        "length": 7,
        "pinyin": "schtjzy",
        "s": [0],
        "t": [3],
        "y": [6],
        "z": [5]
    }, {
        "chinese": "咋崭渝襟婪好",
        "h": [5],
        "id": 843,
        "j": [3],
        "l": [4],
        "length": 6,
        "pinyin": "zzyjlh",
        "y": [2],
        "z": [0, 1]
    }, {
        "chinese": "境藉琶浙",
        "id": 844,
        "j": [0, 1],
        "length": 4,
        "p": [2],
        "pinyin": "jjpz",
        "z": [3]
    }, {
        "c": [2],
        "chinese": "蛹贴此了慧韶冉里骸客",
        "h": [4, 8],
        "id": 845,
        "k": [9],
        "l": [3, 7],
        "length": 10,
        "pinyin": "ytclhsrlhk",
        "r": [6],
        "s": [5],
        "t": [1],
        "y": [0]
    }, {
        "c": [5],
        "chinese": "悉鸣贯蜒识逞返窃",
        "f": [6],
        "g": [2],
        "id": 846,
        "length": 8,
        "m": [1],
        "pinyin": "xmgyscfq",
        "q": [7],
        "s": [4],
        "x": [0],
        "y": [3]
    }, {
        "c": [1, 5],
        "chinese": "凶撤赶指遮窜屿",
        "g": [2],
        "id": 847,
        "length": 7,
        "pinyin": "xcgzzcy",
        "x": [0],
        "y": [6],
        "z": [3, 4]
    }, {
        "chinese": "克仕小绅靖耿回稼",
        "g": [5],
        "h": [6],
        "id": 848,
        "j": [4, 7],
        "k": [0],
        "length": 8,
        "pinyin": "ksxsjghj",
        "s": [1, 3],
        "x": [2]
    }, {
        "c": [0],
        "chinese": "从拣辛震因氓葡",
        "id": 849,
        "j": [1],
        "length": 7,
        "m": [5],
        "p": [6],
        "pinyin": "cjxzymp",
        "x": [2],
        "y": [4],
        "z": [3]
    }, {
        "c": [7, 9],
        "chinese": "铱货妄极重将衡催懈痴",
        "h": [1, 6],
        "id": 850,
        "j": [3, 5],
        "length": 10,
        "pinyin": "yhwjzjhcxc",
        "w": [2],
        "x": [8],
        "y": [0],
        "z": [4]
    }, {
        "c": [3],
        "chinese": "冶戏族疵预宴赁岭",
        "id": 851,
        "l": [6, 7],
        "length": 8,
        "pinyin": "yxzcyyll",
        "x": [1],
        "y": [0, 4, 5],
        "z": [2]
    }, {
        "a": [0],
        "chinese": "凹鹊熊涂永",
        "id": 852,
        "length": 5,
        "pinyin": "aqxty",
        "q": [1],
        "t": [3],
        "x": [2],
        "y": [4]
    }, {
        "chinese": "娄谚脚朋",
        "id": 853,
        "j": [2],
        "l": [0],
        "length": 4,
        "p": [3],
        "pinyin": "lyjp",
        "y": [1]
    }, {
        "b": [7],
        "chinese": "帅医浆托争谜拷脖退峙境",
        "id": 854,
        "j": [2, 10],
        "k": [6],
        "length": 11,
        "m": [5],
        "pinyin": "syjtzmkbtzj",
        "s": [0],
        "t": [3, 8],
        "y": [1],
        "z": [4, 9]
    }, {
        "c": [1],
        "chinese": "韩错卡烦淡述炯戌",
        "d": [4],
        "f": [3],
        "h": [0],
        "id": 855,
        "j": [6],
        "k": [2],
        "length": 8,
        "pinyin": "hckfdsjx",
        "s": [5],
        "x": [7]
    }, {
        "c": [6],
        "chinese": "了相锚宛靴溃差腆胁",
        "id": 856,
        "k": [5],
        "l": [0],
        "length": 9,
        "m": [2],
        "pinyin": "lxmwxkctx",
        "t": [7],
        "w": [3],
        "x": [1, 4, 8]
    }, {
        "b": [2, 3],
        "chinese": "镇砒罢叭",
        "id": 857,
        "length": 4,
        "p": [1],
        "pinyin": "zpbb",
        "z": [0]
    }, {
        "chinese": "收舆鹃忌裴琉伸赔儒拂",
        "f": [9],
        "id": 858,
        "j": [2, 3],
        "l": [5],
        "length": 10,
        "p": [4, 7],
        "pinyin": "syjjplsprf",
        "r": [8],
        "s": [0, 6],
        "y": [1]
    }, {
        "c": [0],
        "chinese": "池歹敛丧",
        "d": [1],
        "id": 859,
        "l": [2],
        "length": 4,
        "pinyin": "cdls",
        "s": [3]
    }, {
        "chinese": "满否悬释字",
        "f": [1],
        "id": 860,
        "length": 5,
        "m": [0],
        "pinyin": "mfxsz",
        "s": [3],
        "x": [2],
        "z": [4]
    }, {
        "b": [2],
        "c": [0],
        "chinese": "忱茫怖铱窟河莫饿",
        "e": [7],
        "h": [5],
        "id": 861,
        "k": [4],
        "length": 8,
        "m": [1, 6],
        "pinyin": "cmbykhme",
        "y": [3]
    }, {
        "c": [7, 9, 10],
        "chinese": "祭趴缘喇冀淆巾蠢偶赐颤",
        "id": 862,
        "j": [0, 4, 6],
        "l": [3],
        "length": 11,
        "o": [8],
        "p": [1],
        "pinyin": "jpyljxjcocc",
        "x": [5],
        "y": [2]
    }, {
        "c": [1],
        "chinese": "束骋父耀景惊",
        "f": [2],
        "id": 863,
        "j": [4, 5],
        "length": 6,
        "pinyin": "scfyjj",
        "s": [0],
        "y": [3]
    }, {
        "chinese": "菇论义刁运风黎蹲",
        "d": [3, 7],
        "f": [5],
        "g": [0],
        "id": 864,
        "l": [1, 6],
        "length": 8,
        "pinyin": "glydyfld",
        "y": [2, 4]
    }, {
        "c": [2],
        "chinese": "声萄乘属姬乓拘",
        "id": 865,
        "j": [4, 6],
        "length": 7,
        "p": [5],
        "pinyin": "stcsjpj",
        "s": [0, 3],
        "t": [1]
    }, {
        "c": [4],
        "chinese": "秘陋惠瘩创",
        "d": [3],
        "h": [2],
        "id": 866,
        "l": [1],
        "length": 5,
        "m": [0],
        "pinyin": "mlhdc"
    }, {
        "chinese": "驮傣吱惰须效俏那叁",
        "d": [1, 3],
        "id": 867,
        "length": 9,
        "n": [7],
        "pinyin": "tdzdxxqns",
        "q": [6],
        "s": [8],
        "t": [0],
        "x": [4, 5],
        "z": [2]
    }, {
        "a": [1],
        "chinese": "袱皑社苑戊许京",
        "f": [0],
        "id": 868,
        "j": [6],
        "length": 7,
        "pinyin": "fasywxj",
        "s": [2],
        "w": [4],
        "x": [5],
        "y": [3]
    }, {
        "chinese": "证绽朱匪瓦陀渡牵类",
        "d": [6],
        "f": [3],
        "id": 869,
        "l": [8],
        "length": 9,
        "pinyin": "zzzfwtdql",
        "q": [7],
        "t": [5],
        "w": [4],
        "z": [0, 1, 2]
    }, {
        "c": [2, 4],
        "chinese": "缔楼出瀑串踊会难援进腿",
        "d": [0],
        "h": [6],
        "id": 870,
        "j": [9],
        "l": [1],
        "length": 11,
        "n": [7],
        "p": [3],
        "pinyin": "dlcpcyhnyjt",
        "t": [10],
        "y": [5, 8]
    }, {
        "chinese": "至菏库皂疹吗观阳",
        "g": [6],
        "h": [1],
        "id": 871,
        "k": [2],
        "length": 8,
        "m": [5],
        "pinyin": "zhkzzmgy",
        "y": [7],
        "z": [0, 3, 4]
    }, {
        "c": [4, 5],
        "chinese": "漱丹蚂印诧磋绚孔有芍",
        "d": [1],
        "id": 872,
        "k": [7],
        "length": 10,
        "m": [2],
        "pinyin": "sdmyccxkys",
        "s": [0, 9],
        "x": [6],
        "y": [3, 8]
    }, {
        "chinese": "爹盟刊协受拂骸墓左阴",
        "d": [0],
        "f": [5],
        "h": [6],
        "id": 873,
        "k": [2],
        "length": 10,
        "m": [1, 7],
        "pinyin": "dmkxsfhmzy",
        "s": [4],
        "x": [3],
        "y": [9],
        "z": [8]
    }, {
        "a": [6],
        "chinese": "馏永换杆乞信埃辆",
        "g": [3],
        "h": [2],
        "id": 874,
        "l": [0, 7],
        "length": 8,
        "pinyin": "lyhgqxal",
        "q": [4],
        "x": [5],
        "y": [1]
    }, {
        "c": [1],
        "chinese": "设臣撅乙",
        "id": 875,
        "j": [2],
        "length": 4,
        "pinyin": "scjy",
        "s": [0],
        "y": [3]
    }, {
        "c": [3],
        "chinese": "顽玫碟纯龚涣刻课桑蛾脂",
        "d": [2],
        "e": [9],
        "g": [4],
        "h": [5],
        "id": 876,
        "k": [6, 7],
        "length": 11,
        "m": [1],
        "pinyin": "wmdcghkksez",
        "s": [8],
        "w": [0],
        "z": [10]
    }, {
        "b": [0],
        "c": [7],
        "chinese": "颁距它牌析汾英触圈曲",
        "f": [5],
        "id": 877,
        "j": [1],
        "length": 10,
        "p": [3],
        "pinyin": "bjtpxfycqq",
        "q": [8, 9],
        "t": [2],
        "x": [4],
        "y": [6]
    }, {
        "b": [8],
        "chinese": "周擂棕贴啼缅签靠杯毫诌",
        "h": [9],
        "id": 878,
        "k": [7],
        "l": [1],
        "length": 11,
        "m": [5],
        "pinyin": "zlzttmqkbhz",
        "q": [6],
        "t": [3, 4],
        "z": [0, 2, 10]
    }, {
        "chinese": "圭寄旋裹解讫陷亲",
        "g": [0, 3],
        "id": 879,
        "j": [1, 4],
        "length": 8,
        "pinyin": "gjxgjqxq",
        "q": [5, 7],
        "x": [2, 6]
    }, {
        "c": [4],
        "chinese": "室做刚麓程纺",
        "f": [5],
        "g": [2],
        "id": 880,
        "l": [3],
        "length": 6,
        "pinyin": "szglcf",
        "s": [0],
        "z": [1]
    }, {
        "a": [1],
        "b": [7],
        "c": [2],
        "chinese": "熟傲秤描舞荡中杯",
        "d": [5],
        "id": 881,
        "length": 8,
        "m": [3],
        "pinyin": "sacmwdzb",
        "s": [0],
        "w": [4],
        "z": [6]
    }, {
        "chinese": "荫迪滥叼绽杉腑馅疚",
        "d": [1, 3],
        "f": [6],
        "id": 882,
        "j": [8],
        "l": [2],
        "length": 9,
        "pinyin": "ydldzsfxj",
        "s": [5],
        "x": [7],
        "y": [0],
        "z": [4]
    }, {
        "b": [0],
        "c": [4, 5, 8],
        "chinese": "膘单魔拣菜测勘四酬试",
        "d": [1],
        "id": 883,
        "j": [3],
        "k": [6],
        "length": 10,
        "m": [2],
        "pinyin": "bdmjcckscs",
        "s": [7, 9]
    }, {
        "chinese": "倪邀挽制褪妒属凝",
        "d": [5],
        "id": 884,
        "length": 8,
        "n": [0, 7],
        "pinyin": "nywztdsn",
        "s": [6],
        "t": [4],
        "w": [2],
        "y": [1],
        "z": [3]
    }, {
        "c": [4],
        "chinese": "使环进勤池洋碾",
        "h": [1],
        "id": 885,
        "j": [2],
        "length": 7,
        "n": [6],
        "pinyin": "shjqcyn",
        "q": [3],
        "s": [0],
        "y": [5]
    }, {
        "b": [0, 9],
        "chinese": "暴赞康忧舌悦素窟这彼",
        "id": 886,
        "k": [2, 7],
        "length": 10,
        "pinyin": "bzkysyskzb",
        "s": [4, 6],
        "y": [3, 5],
        "z": [1, 8]
    }, {
        "b": [1],
        "chinese": "舜贝痒狂",
        "id": 887,
        "k": [3],
        "length": 4,
        "pinyin": "sbyk",
        "s": [0],
        "y": [2]
    }, {
        "chinese": "详埂多由柞骸俭姚猛铣",
        "d": [2],
        "g": [1],
        "h": [5],
        "id": 888,
        "j": [6],
        "length": 10,
        "m": [8],
        "pinyin": "xgdyzhjymx",
        "x": [0, 9],
        "y": [3, 7],
        "z": [4]
    }, {
        "c": [1, 6],
        "chinese": "沼陈攘逆简屁措眷",
        "id": 889,
        "j": [4, 7],
        "length": 8,
        "n": [3],
        "p": [5],
        "pinyin": "zcrnjpcj",
        "r": [2],
        "z": [0]
    }, {
        "chinese": "踪嵌拘殿糜嫂",
        "d": [3],
        "id": 890,
        "j": [2],
        "length": 6,
        "m": [4],
        "pinyin": "zqjdms",
        "q": [1],
        "s": [5],
        "z": [0]
    }, {
        "b": [2, 7],
        "chinese": "于兔哺帚集这愈并棋",
        "id": 891,
        "j": [4],
        "length": 9,
        "pinyin": "ytbzjzybq",
        "q": [8],
        "t": [1],
        "y": [0, 6],
        "z": [3, 5]
    }, {
        "c": [0],
        "chinese": "称鹅盼咯泡隋一",
        "e": [1],
        "g": [3],
        "id": 892,
        "length": 7,
        "p": [2, 4],
        "pinyin": "cepgpsy",
        "s": [5],
        "y": [6]
    }, {
        "chinese": "乱朱监最给峭府贾且倔逮",
        "d": [10],
        "f": [6],
        "g": [4],
        "id": 893,
        "j": [2, 7, 9],
        "l": [0],
        "length": 11,
        "pinyin": "lzjzgqfjqjd",
        "q": [5, 8],
        "z": [1, 3]
    }, {
        "c": [3],
        "chinese": "吁性泡昌仲阀蛮炬磺瓮",
        "f": [5],
        "h": [8],
        "id": 894,
        "j": [7],
        "length": 10,
        "m": [6],
        "p": [2],
        "pinyin": "xxpczfmjhw",
        "w": [9],
        "x": [0, 1],
        "z": [4]
    }, {
        "chinese": "蛆科念溉薛",
        "g": [3],
        "id": 895,
        "k": [1],
        "length": 5,
        "n": [2],
        "pinyin": "qkngx",
        "q": [0],
        "x": [4]
    }, {
        "a": [2],
        "c": [0],
        "chinese": "撤垮胺丘滑",
        "h": [4],
        "id": 896,
        "k": [1],
        "length": 5,
        "pinyin": "ckaqh",
        "q": [3]
    }, {
        "c": [0],
        "chinese": "处后掳赌履潞",
        "d": [3],
        "h": [1],
        "id": 897,
        "l": [2, 4, 5],
        "length": 6,
        "pinyin": "chldll"
    }, {
        "b": [0],
        "chinese": "必寝翔些心裸痢",
        "id": 898,
        "l": [5, 6],
        "length": 7,
        "pinyin": "bqxxxll",
        "q": [1],
        "x": [2, 3, 4]
    }, {
        "b": [1],
        "c": [0],
        "chinese": "齿边琵将建涵刘荤轿",
        "h": [5, 7],
        "id": 899,
        "j": [3, 4, 8],
        "l": [6],
        "length": 9,
        "p": [2],
        "pinyin": "cbpjjhlhj"
    }, {
        "b": [2, 9],
        "chinese": "愿嗜辫寄啃漠倚咳蜀币侄",
        "h": [7],
        "id": 900,
        "j": [3],
        "k": [4],
        "length": 11,
        "m": [5],
        "pinyin": "ysbjkmyhsbz",
        "s": [1, 8],
        "y": [0, 6],
        "z": [10]
    }, {
        "chinese": "醉绥房勿寨嘶事",
        "f": [2],
        "id": 901,
        "length": 7,
        "pinyin": "zsfwzss",
        "s": [1, 5, 6],
        "w": [3],
        "z": [0, 4]
    }, {
        "c": [4],
        "chinese": "氏题芍口筹恿欣谁",
        "id": 902,
        "k": [3],
        "length": 8,
        "pinyin": "stskcyxs",
        "s": [0, 2, 7],
        "t": [1],
        "x": [6],
        "y": [5]
    }, {
        "chinese": "驶茅睁仆奠觉蕊级爬",
        "d": [4],
        "id": 903,
        "j": [5, 7],
        "length": 9,
        "m": [1],
        "p": [3, 8],
        "pinyin": "smzpdjrjp",
        "r": [6],
        "s": [0],
        "z": [2]
    }, {
        "b": [4],
        "chinese": "混庚篷形板柒跨上贮",
        "g": [1],
        "h": [0],
        "id": 904,
        "k": [6],
        "length": 9,
        "p": [2],
        "pinyin": "hgpxbqksz",
        "q": [5],
        "s": [7],
        "x": [3],
        "z": [8]
    }, {
        "b": [5],
        "chinese": "硝歉兄带田迸恃媳蓑既",
        "d": [3],
        "id": 905,
        "j": [9],
        "length": 10,
        "pinyin": "xqxdtbsxsj",
        "q": [1],
        "s": [6, 8],
        "t": [4],
        "x": [0, 2, 7]
    }, {
        "c": [0],
        "chinese": "郴缆渍害锑多剧屁",
        "d": [5],
        "h": [3],
        "id": 906,
        "j": [6],
        "l": [1],
        "length": 8,
        "p": [7],
        "pinyin": "clzhtdjp",
        "t": [4],
        "z": [2]
    }, {
        "b": [7],
        "chinese": "续梯甩你砚深档宾",
        "d": [6],
        "id": 907,
        "length": 8,
        "n": [3],
        "pinyin": "xtsnysdb",
        "s": [2, 5],
        "t": [1],
        "x": [0],
        "y": [4]
    }, {
        "c": [3],
        "chinese": "鸦峪勒存",
        "id": 908,
        "l": [2],
        "length": 4,
        "pinyin": "yylc",
        "y": [0, 1]
    }, {
        "b": [9],
        "c": [2],
        "chinese": "卒焕曾带婴嘶早硕耐梆",
        "d": [3],
        "h": [1],
        "id": 909,
        "length": 10,
        "n": [8],
        "pinyin": "zhcdyszsnb",
        "s": [5, 7],
        "y": [4],
        "z": [0, 6]
    }, {
        "c": [4],
        "chinese": "协武呛蘑称",
        "id": 910,
        "length": 5,
        "m": [3],
        "pinyin": "xwqmc",
        "q": [2],
        "w": [1],
        "x": [0]
    }, {
        "chinese": "殷氮责椒弃曰柯磷痛",
        "d": [1],
        "id": 911,
        "j": [3],
        "k": [6],
        "l": [7],
        "length": 9,
        "pinyin": "ydzjqyklt",
        "q": [4],
        "t": [8],
        "y": [0, 5],
        "z": [2]
    }, {
        "c": [0],
        "chinese": "层千邻漠况机虎砒",
        "h": [6],
        "id": 912,
        "j": [5],
        "k": [4],
        "l": [2],
        "length": 8,
        "m": [3],
        "p": [7],
        "pinyin": "cqlmkjhp",
        "q": [1]
    }, {
        "b": [3],
        "c": [0],
        "chinese": "稠锭盗钵",
        "d": [1, 2],
        "id": 913,
        "length": 4,
        "pinyin": "cddb"
    }, {
        "c": [0, 4, 6],
        "chinese": "囱澜衰七催闪耻",
        "id": 914,
        "l": [1],
        "length": 7,
        "pinyin": "clsqcsc",
        "q": [3],
        "s": [2, 5]
    }, {
        "c": [3, 7],
        "chinese": "胁咆侯此陆砷痘尺睛浪",
        "d": [6],
        "h": [2],
        "id": 915,
        "j": [8],
        "l": [4, 9],
        "length": 10,
        "p": [1],
        "pinyin": "xphclsdcjl",
        "s": [5],
        "x": [0]
    }, {
        "chinese": "尖梧渭钟伟猿狭柬窘",
        "id": 916,
        "j": [0, 7, 8],
        "length": 9,
        "pinyin": "jwwzwyxjj",
        "w": [1, 2, 4],
        "x": [6],
        "y": [5],
        "z": [3]
    }, {
        "c": [5],
        "chinese": "妆昧徒霉抵乘",
        "d": [4],
        "id": 917,
        "length": 6,
        "m": [1, 3],
        "pinyin": "zmtmdc",
        "t": [2],
        "z": [0]
    }, {
        "chinese": "摊赊涣揉国牲锈韩森",
        "g": [4],
        "h": [2, 7],
        "id": 918,
        "length": 9,
        "pinyin": "tshrgsxhs",
        "r": [3],
        "s": [1, 5, 8],
        "t": [0],
        "x": [6]
    }, {
        "b": [6, 9],
        "c": [2, 4],
        "chinese": "誓钨裁猪迟抗贬微隋痹",
        "id": 919,
        "k": [5],
        "length": 10,
        "pinyin": "swczckbwsb",
        "s": [0, 8],
        "w": [1, 7],
        "z": [3]
    }, {
        "chinese": "剑淤途睡乾现",
        "id": 920,
        "j": [0],
        "length": 6,
        "pinyin": "jytsqx",
        "q": [4],
        "s": [3],
        "t": [2],
        "x": [5],
        "y": [1]
    }, {
        "c": [4],
        "chinese": "颐凄缀蚂炒观诣邑美贯舵",
        "d": [10],
        "g": [5, 9],
        "id": 921,
        "length": 11,
        "m": [3, 8],
        "pinyin": "yqzmcgyymgd",
        "q": [1],
        "y": [0, 6, 7],
        "z": [2]
    }, {
        "a": [4],
        "chinese": "熏墅减蒲爱够靖荣",
        "g": [5],
        "id": 922,
        "j": [2, 6],
        "length": 8,
        "p": [3],
        "pinyin": "xsjpagjr",
        "r": [7],
        "s": [1],
        "x": [0]
    }, {
        "b": [5],
        "c": [8],
        "chinese": "乓晋脊悦宙扳完纫吵",
        "id": 923,
        "j": [1, 2],
        "length": 9,
        "p": [0],
        "pinyin": "pjjyzbwrc",
        "r": [7],
        "w": [6],
        "y": [3],
        "z": [4]
    }, {
        "chinese": "兄拽警诲飞畏弹刁",
        "d": [6, 7],
        "f": [4],
        "h": [3],
        "id": 924,
        "j": [2],
        "length": 8,
        "pinyin": "xzjhfwdd",
        "w": [5],
        "x": [0],
        "z": [1]
    }, {
        "chinese": "叁秋豌禄厚哮截",
        "h": [4],
        "id": 925,
        "j": [6],
        "l": [3],
        "length": 7,
        "pinyin": "sqwlhxj",
        "q": [1],
        "s": [0],
        "w": [2],
        "x": [5]
    }, {
        "b": [1],
        "c": [0],
        "chinese": "催波慰抓",
        "id": 926,
        "length": 4,
        "pinyin": "cbwz",
        "w": [2],
        "z": [3]
    }, {
        "c": [1],
        "chinese": "墅藏涕聘附孺摊毁岿梭",
        "f": [4],
        "h": [7],
        "id": 927,
        "k": [8],
        "length": 10,
        "p": [3],
        "pinyin": "sctpfrthks",
        "r": [5],
        "s": [0, 9],
        "t": [2, 6]
    }, {
        "c": [3],
        "chinese": "落奉埂超沈刹悯罩",
        "f": [1],
        "g": [2],
        "id": 928,
        "l": [0],
        "length": 8,
        "m": [6],
        "pinyin": "lfgcssmz",
        "s": [4, 5],
        "z": [7]
    }, {
        "b": [1],
        "c": [4],
        "chinese": "著惫浩首春宇虚州戈",
        "g": [8],
        "h": [2],
        "id": 929,
        "length": 9,
        "pinyin": "zbhscyxzg",
        "s": [3],
        "x": [6],
        "y": [5],
        "z": [0, 7]
    }, {
        "b": [4],
        "c": [3],
        "chinese": "腥烙谷柴博汝蕉倘竿术",
        "g": [2, 8],
        "id": 930,
        "j": [6],
        "l": [1],
        "length": 10,
        "pinyin": "xlgcbrjtgs",
        "r": [5],
        "s": [9],
        "t": [7],
        "x": [0]
    }, {
        "chinese": "狙远烷浦甫怨",
        "f": [4],
        "id": 931,
        "j": [0],
        "length": 6,
        "p": [3],
        "pinyin": "jywpfy",
        "w": [2],
        "y": [1, 5]
    }, {
        "chinese": "兴咒抬偏节锑桥饺龟壮羞",
        "g": [8],
        "id": 932,
        "j": [4, 7],
        "length": 11,
        "p": [3],
        "pinyin": "xztpjtqjgzx",
        "q": [6],
        "t": [2, 5],
        "x": [0, 10],
        "z": [1, 9]
    }, {
        "chinese": "圈失叮蜒听",
        "d": [2],
        "id": 933,
        "length": 5,
        "pinyin": "qsdyt",
        "q": [0],
        "s": [1],
        "t": [4],
        "y": [3]
    }, {
        "b": [3],
        "chinese": "匝斋殃八畦",
        "id": 934,
        "length": 5,
        "pinyin": "zzybq",
        "q": [4],
        "y": [2],
        "z": [0, 1]
    }, {
        "c": [9],
        "chinese": "硕藻哗狼磐山苦嘛韵采哑",
        "h": [2],
        "id": 935,
        "k": [6],
        "l": [3],
        "length": 11,
        "m": [7],
        "p": [4],
        "pinyin": "szhlpskmycy",
        "s": [0, 5],
        "y": [8, 10],
        "z": [1]
    }, {
        "chinese": "萨善掖骂直恋桐赖",
        "id": 936,
        "l": [5, 7],
        "length": 8,
        "m": [3],
        "pinyin": "ssymzltl",
        "s": [0, 1],
        "t": [6],
        "y": [2],
        "z": [4]
    }, {
        "chinese": "汪牵琉医铱牟茧",
        "id": 937,
        "j": [6],
        "l": [2],
        "length": 7,
        "m": [5],
        "pinyin": "wqlyymj",
        "q": [1],
        "w": [0],
        "y": [3, 4]
    }, {
        "chinese": "画尼鹤禁",
        "h": [0, 2],
        "id": 938,
        "j": [3],
        "length": 4,
        "n": [1],
        "pinyin": "hnhj"
    }, {
        "c": [5],
        "chinese": "脐早拍先像策刷郭辽利",
        "g": [7],
        "id": 939,
        "l": [8, 9],
        "length": 10,
        "p": [2],
        "pinyin": "qzpxxcsgll",
        "q": [0],
        "s": [6],
        "x": [3, 4],
        "z": [1]
    }, {
        "chinese": "茧飞聚豪",
        "f": [1],
        "h": [3],
        "id": 940,
        "j": [0, 2],
        "length": 4,
        "pinyin": "jfjh"
    }, {
        "chinese": "藤形强缺鸭额栈韭碘杠懒",
        "d": [8],
        "e": [5],
        "g": [9],
        "id": 941,
        "j": [7],
        "l": [10],
        "length": 11,
        "pinyin": "txqqyezjdgl",
        "q": [2, 3],
        "t": [0],
        "x": [1],
        "y": [4],
        "z": [6]
    }, {
        "chinese": "符兽凉掷菊挑",
        "f": [0],
        "id": 942,
        "j": [4],
        "l": [2],
        "length": 6,
        "pinyin": "fslzjt",
        "s": [1],
        "t": [5],
        "z": [3]
    }, {
        "chinese": "粪搭鲜迪",
        "d": [1, 3],
        "f": [0],
        "id": 943,
        "length": 4,
        "pinyin": "fdxd",
        "x": [2]
    }, {
        "c": [4],
        "chinese": "膨弓锅凯喘堕企栈润灯脯",
        "d": [5, 9],
        "g": [1, 2],
        "id": 944,
        "k": [3],
        "length": 11,
        "p": [0, 10],
        "pinyin": "pggkcdqzrdp",
        "q": [6],
        "r": [8],
        "z": [7]
    }, {
        "a": [2],
        "chinese": "瘴厅哎鉴屑复颓恢",
        "f": [5],
        "h": [7],
        "id": 945,
        "j": [3],
        "length": 8,
        "pinyin": "ztajxfth",
        "t": [1, 6],
        "x": [4],
        "z": [0]
    }, {
        "c": [0],
        "chinese": "朝隆费至仕屋咀读趾",
        "d": [7],
        "f": [2],
        "id": 946,
        "j": [6],
        "l": [1],
        "length": 9,
        "pinyin": "clfzswjdz",
        "s": [4],
        "w": [5],
        "z": [3, 8]
    }, {
        "b": [6],
        "c": [4],
        "chinese": "盟三汁硅巢喧卜",
        "g": [3],
        "id": 947,
        "length": 7,
        "m": [0],
        "pinyin": "mszgcxb",
        "s": [1],
        "x": [5],
        "z": [2]
    }, {
        "b": [5],
        "chinese": "三薯融署邢辫酗",
        "id": 948,
        "length": 7,
        "pinyin": "ssrsxbx",
        "r": [2],
        "s": [0, 1, 3],
        "x": [4, 6]
    }, {
        "chinese": "儡陀油欺碟抗佩掐",
        "d": [4],
        "id": 949,
        "k": [5],
        "l": [0],
        "length": 8,
        "p": [6],
        "pinyin": "ltyqdkpq",
        "q": [3, 7],
        "t": [1],
        "y": [2]
    }, {
        "chinese": "是惰嫉欠逃峡姬辟兽著",
        "d": [1],
        "id": 950,
        "j": [2, 6],
        "length": 10,
        "p": [7],
        "pinyin": "sdjqtxjpsz",
        "q": [3],
        "s": [0, 8],
        "t": [4],
        "x": [5],
        "z": [9]
    }, {
        "c": [2, 8],
        "chinese": "吞狐丑滋脯汐肝赃伺芋",
        "g": [6],
        "h": [1],
        "id": 951,
        "length": 10,
        "p": [4],
        "pinyin": "thczpxgzcy",
        "t": [0],
        "x": [5],
        "y": [9],
        "z": [3, 7]
    }, {
        "b": [0, 4],
        "c": [5],
        "chinese": "扳胳跨碟不侈滚缅窄",
        "d": [3],
        "g": [1, 6],
        "id": 952,
        "k": [2],
        "length": 9,
        "m": [7],
        "pinyin": "bgkdbcgmz",
        "z": [8]
    }, {
        "b": [3],
        "chinese": "拭嘉杠绊",
        "g": [2],
        "id": 953,
        "j": [1],
        "length": 4,
        "pinyin": "sjgb",
        "s": [0]
    }, {
        "chinese": "合馒穴孺",
        "h": [0],
        "id": 954,
        "length": 4,
        "m": [1],
        "pinyin": "hmxr",
        "r": [3],
        "x": [2]
    }, {
        "b": [1, 7],
        "chinese": "豌悲侮旬亢重饺斌直缮勤",
        "id": 955,
        "j": [6],
        "k": [4],
        "length": 11,
        "pinyin": "wbwxkzjbzsq",
        "q": [10],
        "s": [9],
        "w": [0, 2],
        "x": [3],
        "z": [5, 8]
    }, {
        "b": [2, 7],
        "c": [3],
        "chinese": "秸饵抱翠鱼晚带瘪",
        "d": [6],
        "e": [1],
        "id": 956,
        "j": [0],
        "length": 8,
        "pinyin": "jebcywdb",
        "w": [5],
        "y": [4]
    }, {
        "chinese": "斋顷竭怯禽芳纲井坪",
        "f": [5],
        "g": [6],
        "id": 957,
        "j": [2, 7],
        "length": 9,
        "p": [8],
        "pinyin": "zqjqqfgjp",
        "q": [1, 3, 4],
        "z": [0]
    }, {
        "b": [0],
        "chinese": "表玖店褐挖章",
        "d": [2],
        "h": [3],
        "id": 958,
        "j": [1],
        "length": 6,
        "pinyin": "bjdhwz",
        "w": [4],
        "z": [5]
    }, {
        "b": [4, 5],
        "chinese": "跪驹葫薛比半紊盗膜愈",
        "d": [7],
        "g": [0],
        "h": [2],
        "id": 959,
        "j": [1],
        "length": 10,
        "m": [8],
        "pinyin": "gjhxbbwdmy",
        "w": [6],
        "x": [3],
        "y": [9]
    }, {
        "chinese": "麦唆彰逝兄扑平开侵",
        "id": 960,
        "k": [7],
        "length": 9,
        "m": [0],
        "p": [5, 6],
        "pinyin": "mszsxppkq",
        "q": [8],
        "s": [1, 3],
        "x": [4],
        "z": [2]
    }, {
        "chinese": "摹峪舵堤",
        "d": [2, 3],
        "id": 961,
        "length": 4,
        "m": [0],
        "pinyin": "mydd",
        "y": [1]
    }, {
        "c": [2],
        "chinese": "圆蝴睬颈麻",
        "h": [1],
        "id": 962,
        "j": [3],
        "length": 5,
        "m": [4],
        "pinyin": "yhcjm",
        "y": [0]
    }, {
        "b": [5],
        "c": [0, 4],
        "chinese": "程拾友露场柏衰宿闷责纬",
        "id": 963,
        "l": [3],
        "length": 11,
        "m": [8],
        "pinyin": "csylcbssmzw",
        "s": [1, 6, 7],
        "w": [10],
        "y": [2],
        "z": [9]
    }, {
        "chinese": "盲堤魁珐",
        "d": [1],
        "f": [3],
        "id": 964,
        "k": [2],
        "length": 4,
        "m": [0],
        "pinyin": "mdkf"
    }, {
        "b": [6],
        "c": [1, 3],
        "chinese": "或豺晓厨愈皋陛赏",
        "g": [5],
        "h": [0],
        "id": 965,
        "length": 8,
        "pinyin": "hcxcygbs",
        "s": [7],
        "x": [2],
        "y": [4]
    }, {
        "b": [3],
        "chinese": "带塞有扳鞠现吕镀",
        "d": [0, 7],
        "id": 966,
        "j": [4],
        "l": [6],
        "length": 8,
        "pinyin": "dsybjxld",
        "s": [1],
        "x": [5],
        "y": [2]
    }, {
        "chinese": "去怀门吟暮筋",
        "h": [1],
        "id": 967,
        "j": [5],
        "length": 6,
        "m": [2, 4],
        "pinyin": "qhmymj",
        "q": [0],
        "y": [3]
    }, {
        "b": [4],
        "chinese": "拼栏卫埔棒航",
        "h": [5],
        "id": 968,
        "l": [1],
        "length": 6,
        "p": [0, 3],
        "pinyin": "plwpbh",
        "w": [2]
    }, {
        "b": [5, 7],
        "c": [1, 2],
        "chinese": "焦楚触兽碌伯咋暴闰蒜",
        "id": 969,
        "j": [0],
        "l": [4],
        "length": 10,
        "pinyin": "jccslbzbrs",
        "r": [8],
        "s": [3, 9],
        "z": [6]
    }, {
        "chinese": "峙雀揍孽竞风赦检玫掉",
        "d": [9],
        "f": [5],
        "id": 970,
        "j": [4, 7],
        "length": 10,
        "m": [8],
        "n": [3],
        "pinyin": "zqznjfsjmd",
        "q": [1],
        "s": [6],
        "z": [0, 2]
    }, {
        "c": [1, 9],
        "chinese": "断触吐肆蔫游子钝宪苍",
        "d": [0, 7],
        "id": 971,
        "length": 10,
        "n": [4],
        "pinyin": "dctsnyzdxc",
        "s": [3],
        "t": [2],
        "x": [8],
        "y": [5],
        "z": [6]
    }, {
        "b": [1],
        "chinese": "证背袒哈侄溯牲",
        "h": [3],
        "id": 972,
        "length": 7,
        "pinyin": "zbthzss",
        "s": [5, 6],
        "t": [2],
        "z": [0, 4]
    }, {
        "b": [2, 7],
        "c": [3],
        "chinese": "早戏摈尝伸詹蛊捌即雍",
        "g": [6],
        "id": 973,
        "j": [8],
        "length": 10,
        "pinyin": "zxbcszgbjy",
        "s": [4],
        "x": [1],
        "y": [9],
        "z": [0, 5]
    }, {
        "b": [7],
        "chinese": "殖援呛织谐拯拳摆茎喊葬",
        "h": [9],
        "id": 974,
        "j": [8],
        "length": 11,
        "pinyin": "zyqzxzqbjhz",
        "q": [2, 6],
        "x": [4],
        "y": [1],
        "z": [0, 3, 5, 10]
    }, {
        "b": [0, 2],
        "chinese": "伯雇膘戎坛",
        "g": [1],
        "id": 975,
        "length": 5,
        "pinyin": "bgbrt",
        "r": [3],
        "t": [4]
    }, {
        "chinese": "烬诀跨家党",
        "d": [4],
        "id": 976,
        "j": [0, 1, 3],
        "k": [2],
        "length": 5,
        "pinyin": "jjkjd"
    }, {
        "chinese": "鹃骑练闷",
        "id": 977,
        "j": [0],
        "l": [2],
        "length": 4,
        "m": [3],
        "pinyin": "jqlm",
        "q": [1]
    }, {
        "a": [5],
        "c": [3],
        "chinese": "婴硷缮搀遁安珠凤戮武",
        "d": [4],
        "f": [7],
        "id": 978,
        "j": [1],
        "l": [8],
        "length": 10,
        "pinyin": "yjscdazflw",
        "s": [2],
        "w": [9],
        "y": [0],
        "z": [6]
    }, {
        "chinese": "晋式芹糖妻啮",
        "id": 979,
        "j": [0],
        "length": 6,
        "n": [5],
        "pinyin": "jsqtqn",
        "q": [2, 4],
        "s": [1],
        "t": [3]
    }, {
        "chinese": "网憨汉奇烹利恬诀扣剂",
        "h": [1, 2],
        "id": 980,
        "j": [7, 9],
        "k": [8],
        "l": [5],
        "length": 10,
        "p": [4],
        "pinyin": "whhqpltjkj",
        "q": [3],
        "t": [6],
        "w": [0]
    }, {
        "b": [8],
        "chinese": "队绳议炬刊戎谰哟芭",
        "d": [0],
        "id": 981,
        "j": [3],
        "k": [4],
        "l": [6],
        "length": 9,
        "pinyin": "dsyjkrlyb",
        "r": [5],
        "s": [1],
        "y": [2, 7]
    }, {
        "a": [6],
        "b": [3, 4],
        "chinese": "碟吾添佰弊失癌铰句",
        "d": [0],
        "id": 982,
        "j": [7, 8],
        "length": 9,
        "pinyin": "dwtbbsajj",
        "s": [5],
        "t": [2],
        "w": [1]
    }, {
        "b": [1, 3],
        "c": [9],
        "chinese": "询本显秉喻瞎彝奉旺崔",
        "f": [7],
        "id": 983,
        "length": 10,
        "pinyin": "xbxbyxyfwc",
        "w": [8],
        "x": [0, 2, 5],
        "y": [4, 6]
    }, {
        "b": [2],
        "chinese": "紫纳瓣磷秸氦簧力",
        "h": [5, 6],
        "id": 984,
        "j": [4],
        "l": [3, 7],
        "length": 8,
        "n": [1],
        "pinyin": "znbljhhl",
        "z": [0]
    }, {
        "b": [5],
        "chinese": "青汀甸候执辩",
        "d": [2],
        "h": [3],
        "id": 985,
        "length": 6,
        "pinyin": "qtdhzb",
        "q": [0],
        "t": [1],
        "z": [4]
    }, {
        "chinese": "偷慌给豫税侩但深",
        "d": [6],
        "g": [2],
        "h": [1],
        "id": 986,
        "k": [5],
        "length": 8,
        "pinyin": "thgyskds",
        "s": [4, 7],
        "t": [0],
        "y": [3]
    }, {
        "chinese": "洞巧收脑锈淹挟仟",
        "d": [0],
        "id": 987,
        "length": 8,
        "n": [3],
        "pinyin": "dqsnxyxq",
        "q": [1, 7],
        "s": [2],
        "x": [4, 6],
        "y": [5]
    }, {
        "chinese": "摘偶锹灯宅剑徘店谬",
        "d": [3, 7],
        "id": 988,
        "j": [5],
        "length": 9,
        "m": [8],
        "o": [1],
        "p": [6],
        "pinyin": "zoqdzjpdm",
        "q": [2],
        "z": [0, 4]
    }, {
        "b": [0],
        "c": [3],
        "chinese": "八檀这吹格撒忻",
        "g": [4],
        "id": 989,
        "length": 7,
        "pinyin": "btzcgsx",
        "s": [5],
        "t": [1],
        "x": [6],
        "z": [2]
    }, {
        "chinese": "奢愉注脓妆淖什犊",
        "d": [7],
        "id": 990,
        "length": 8,
        "n": [3, 5],
        "pinyin": "syznznsd",
        "s": [0, 6],
        "y": [1],
        "z": [2, 4]
    }, {
        "chinese": "峰阵懒彰绽枢狡格竹篮隐",
        "f": [0],
        "g": [7],
        "id": 991,
        "j": [6],
        "l": [2, 9],
        "length": 11,
        "pinyin": "fzlzzsjgzly",
        "s": [5],
        "y": [10],
        "z": [1, 3, 4, 8]
    }, {
        "c": [1],
        "chinese": "鸵潮默盈覆系力菊赛幌",
        "f": [4],
        "h": [9],
        "id": 992,
        "j": [7],
        "l": [6],
        "length": 10,
        "m": [2],
        "pinyin": "tcmyfxljsh",
        "s": [8],
        "t": [0],
        "x": [5],
        "y": [3]
    }, {
        "chinese": "咕宗倪胀搞烬扎迎隋",
        "g": [0, 4],
        "id": 993,
        "j": [5],
        "length": 9,
        "n": [2],
        "pinyin": "gznzgjzys",
        "s": [8],
        "y": [7],
        "z": [1, 3, 6]
    }, {
        "chinese": "有苑潘街炸双",
        "id": 994,
        "j": [3],
        "length": 6,
        "p": [2],
        "pinyin": "yypjzs",
        "s": [5],
        "y": [0, 1],
        "z": [4]
    }, {
        "a": [3],
        "chinese": "礼增羔唉惰",
        "d": [4],
        "g": [2],
        "id": 995,
        "l": [0],
        "length": 5,
        "pinyin": "lzgad",
        "z": [1]
    }, {
        "c": [0],
        "chinese": "挫努章伏殊悯",
        "f": [3],
        "id": 996,
        "length": 6,
        "m": [5],
        "n": [1],
        "pinyin": "cnzfsm",
        "s": [4],
        "z": [2]
    }, {
        "chinese": "蹄聘锑秆瑟瞪鲸哮朔琢",
        "d": [5],
        "g": [3],
        "id": 997,
        "j": [6],
        "length": 10,
        "p": [1],
        "pinyin": "tptgsdjxsz",
        "s": [4, 8],
        "t": [0, 2],
        "x": [7],
        "z": [9]
    }, {
        "b": [5],
        "chinese": "仁军忙耕港惫棺搜",
        "g": [3, 4, 6],
        "id": 998,
        "j": [1],
        "length": 8,
        "m": [2],
        "pinyin": "rjmggbgs",
        "r": [0],
        "s": [7]
    }, {
        "a": [6],
        "b": [5],
        "chinese": "织谬观粘仙崩癌议待箍",
        "d": [8],
        "g": [2, 9],
        "id": 999,
        "length": 10,
        "m": [1],
        "pinyin": "zmgzxbaydg",
        "x": [4],
        "y": [7],
        "z": [0, 3]
    }, {
        "chinese": "涪怎致解堑务",
        "f": [0],
        "id": 1000,
        "j": [3],
        "length": 6,
        "pinyin": "fzzjqw",
        "q": [4],
        "w": [5],
        "z": [1, 2]
    }, {
        "b": [0],
        "c": [4, 10],
        "chinese": "便拭塞锗敞弱坟榷仕铣伺",
        "f": [6],
        "id": 1001,
        "length": 11,
        "pinyin": "bsszcrfqsxc",
        "q": [7],
        "r": [5],
        "s": [1, 2, 8],
        "x": [9],
        "z": [3]
    }, {
        "b": [0],
        "chinese": "狈晚渝舍",
        "id": 1002,
        "length": 4,
        "pinyin": "bwys",
        "s": [3],
        "w": [1],
        "y": [2]
    }, {
        "chinese": "砚阶轿其锅烹姜钟莉顽狸",
        "g": [4],
        "id": 1003,
        "j": [1, 2, 6],
        "l": [8, 10],
        "length": 11,
        "p": [5],
        "pinyin": "yjjqgpjzlwl",
        "q": [3],
        "w": [9],
        "y": [0],
        "z": [7]
    }, {
        "b": [2],
        "chinese": "署钟宾珐崖芹够胯钓泄拓",
        "d": [8],
        "f": [3],
        "g": [6],
        "id": 1004,
        "k": [7],
        "length": 11,
        "pinyin": "szbfyqgkdxt",
        "q": [5],
        "s": [0],
        "t": [10],
        "x": [9],
        "y": [4],
        "z": [1]
    }, {
        "c": [3],
        "chinese": "矽庞枷唇檀抨堂恐",
        "id": 1005,
        "j": [2],
        "k": [7],
        "length": 8,
        "p": [1, 5],
        "pinyin": "xpjctptk",
        "t": [4, 6],
        "x": [0]
    }, {
        "c": [0],
        "chinese": "初摊揭寇棚饶饯谨儿",
        "e": [8],
        "id": 1006,
        "j": [2, 6, 7],
        "k": [3],
        "length": 9,
        "p": [4],
        "pinyin": "ctjkprjje",
        "r": [5],
        "t": [1]
    }, {
        "chinese": "凉殉伶嘎",
        "g": [3],
        "id": 1007,
        "l": [0, 2],
        "length": 4,
        "pinyin": "lxlg",
        "x": [1]
    }, {
        "b": [8],
        "c": [1, 6, 10],
        "chinese": "探敞爪请呕等刺降柄倔持",
        "d": [5],
        "id": 1008,
        "j": [7, 9],
        "length": 11,
        "o": [4],
        "pinyin": "tczqodcjbjc",
        "q": [3],
        "t": [0],
        "z": [2]
    }, {
        "b": [3],
        "c": [4],
        "chinese": "烩饵务鲍错逻箕",
        "e": [1],
        "h": [0],
        "id": 1009,
        "j": [6],
        "l": [5],
        "length": 7,
        "pinyin": "hewbclj",
        "w": [2]
    }, {
        "chinese": "湾硬祝验发貌吉歌覆术驮",
        "f": [4, 8],
        "g": [7],
        "id": 1010,
        "j": [6],
        "length": 11,
        "m": [5],
        "pinyin": "wyzyfmjgfst",
        "s": [9],
        "t": [10],
        "w": [0],
        "y": [1, 3],
        "z": [2]
    }, {
        "chinese": "济刑夺钓瘫豫洽尿殴劫",
        "d": [2, 3],
        "id": 1011,
        "j": [0, 9],
        "length": 10,
        "n": [7],
        "o": [8],
        "pinyin": "jxddtyqnoj",
        "q": [6],
        "t": [4],
        "x": [1],
        "y": [5]
    }, {
        "c": [4],
        "chinese": "琉悠田沟宠列兽膏梧",
        "g": [3, 7],
        "id": 1012,
        "l": [0, 5],
        "length": 9,
        "pinyin": "lytgclsgw",
        "s": [6],
        "t": [2],
        "w": [8],
        "y": [1]
    }, {
        "chinese": "急靛瞪片米剃桥谰内图蘑",
        "d": [1, 2],
        "id": 1013,
        "j": [0],
        "l": [7],
        "length": 11,
        "m": [4, 10],
        "n": [8],
        "p": [3],
        "pinyin": "jddpmtqlntm",
        "q": [6],
        "t": [5, 9]
    }, {
        "c": [4],
        "chinese": "刷卧晚宜畅捍该",
        "g": [6],
        "h": [5],
        "id": 1014,
        "length": 7,
        "pinyin": "swwychg",
        "s": [0],
        "w": [1, 2],
        "y": [3]
    }, {
        "chinese": "笋赁巧植",
        "id": 1015,
        "l": [1],
        "length": 4,
        "pinyin": "slqz",
        "q": [2],
        "s": [0],
        "z": [3]
    }, {
        "chinese": "璃智琉抖陕",
        "d": [3],
        "id": 1016,
        "l": [0, 2],
        "length": 5,
        "pinyin": "lzlds",
        "s": [4],
        "z": [1]
    }, {
        "chinese": "琳太众揉烬闪",
        "id": 1017,
        "j": [4],
        "l": [0],
        "length": 6,
        "pinyin": "ltzrjs",
        "r": [3],
        "s": [5],
        "t": [1],
        "z": [2]
    }, {
        "chinese": "络麦晕慨茂稀郝撅抹焉",
        "h": [6],
        "id": 1018,
        "j": [7],
        "k": [3],
        "l": [0],
        "length": 10,
        "m": [1, 4, 8],
        "pinyin": "lmykmxhjmy",
        "x": [5],
        "y": [2, 9]
    }, {
        "a": [5],
        "c": [3],
        "chinese": "取孕够撤妇艾复昭",
        "f": [4, 6],
        "g": [2],
        "id": 1019,
        "length": 8,
        "pinyin": "qygcfafz",
        "q": [0],
        "y": [1],
        "z": [7]
    }, {
        "b": [2],
        "c": [0],
        "chinese": "存副渤屉钻",
        "f": [1],
        "id": 1020,
        "length": 5,
        "pinyin": "cfbtz",
        "t": [3],
        "z": [4]
    }, {
        "chinese": "政能去普楼扑赋哨仕",
        "f": [6],
        "id": 1021,
        "l": [4],
        "length": 9,
        "n": [1],
        "p": [3, 5],
        "pinyin": "znqplpfss",
        "q": [2],
        "s": [7, 8],
        "z": [0]
    }, {
        "b": [2],
        "c": [0, 4],
        "chinese": "拆晋弊帧出犀",
        "id": 1022,
        "j": [1],
        "length": 6,
        "pinyin": "cjbzcx",
        "x": [5],
        "z": [3]
    }, {
        "chinese": "慷烟苫亿董冯",
        "d": [4],
        "f": [5],
        "id": 1023,
        "k": [0],
        "length": 6,
        "pinyin": "kysydf",
        "s": [2],
        "y": [1, 3]
    }, {
        "b": [0, 8],
        "c": [7],
        "chinese": "佰转幼乾硼拙岗持搏糕天",
        "g": [6, 9],
        "id": 1024,
        "length": 11,
        "p": [4],
        "pinyin": "bzyqpzgcbgt",
        "q": [3],
        "t": [10],
        "y": [2],
        "z": [1, 5]
    }, {
        "b": [3],
        "chinese": "斜烘疾抱力",
        "h": [1],
        "id": 1025,
        "j": [2],
        "l": [4],
        "length": 5,
        "pinyin": "xhjbl",
        "x": [0]
    }, {
        "a": [5],
        "c": [3],
        "chinese": "蝇肺旭窗陋矮",
        "f": [1],
        "id": 1026,
        "l": [4],
        "length": 6,
        "pinyin": "yfxcla",
        "x": [2],
        "y": [0]
    }, {
        "c": [2],
        "chinese": "摊烟彻葡",
        "id": 1027,
        "length": 4,
        "p": [3],
        "pinyin": "tycp",
        "t": [0],
        "y": [1]
    }, {
        "b": [1],
        "c": [0],
        "chinese": "忱哺争翟锯",
        "d": [3],
        "id": 1028,
        "j": [4],
        "length": 5,
        "pinyin": "cbzdj",
        "z": [2]
    }, {
        "chinese": "银碳芍纹林",
        "id": 1029,
        "l": [4],
        "length": 5,
        "pinyin": "ytswl",
        "s": [2],
        "t": [1],
        "w": [3],
        "y": [0]
    }, {
        "chinese": "拥猴争恤油诸添得课",
        "d": [7],
        "h": [1],
        "id": 1030,
        "k": [8],
        "length": 9,
        "pinyin": "yhzxyztdk",
        "t": [6],
        "x": [3],
        "y": [0, 4],
        "z": [2, 5]
    }, {
        "b": [3],
        "c": [7],
        "chinese": "朗督妇铂赢悦繁猜",
        "d": [1],
        "f": [2, 6],
        "id": 1031,
        "l": [0],
        "length": 8,
        "pinyin": "ldfbyyfc",
        "y": [4, 5]
    }, {
        "chinese": "稀则龄吼点仔荫",
        "d": [4],
        "h": [3],
        "id": 1032,
        "l": [2],
        "length": 7,
        "pinyin": "xzlhdzy",
        "x": [0],
        "y": [6],
        "z": [1, 5]
    }, {
        "chinese": "岛猩肃快耪",
        "d": [0],
        "id": 1033,
        "k": [3],
        "length": 5,
        "p": [4],
        "pinyin": "dxskp",
        "s": [2],
        "x": [1]
    }, {
        "c": [1, 2],
        "chinese": "屯诚钞钻择泅浸镣",
        "id": 1034,
        "j": [6],
        "l": [7],
        "length": 8,
        "pinyin": "tcczzqjl",
        "q": [5],
        "t": [0],
        "z": [3, 4]
    }, {
        "b": [8],
        "chinese": "哇滩熊真掉游契滋迸肚",
        "d": [4, 9],
        "id": 1035,
        "length": 10,
        "pinyin": "wtxzdyqzbd",
        "q": [6],
        "t": [1],
        "w": [0],
        "x": [2],
        "y": [5],
        "z": [3, 7]
    }, {
        "chinese": "斯跺慢侮忙",
        "d": [1],
        "id": 1036,
        "length": 5,
        "m": [2, 4],
        "pinyin": "sdmwm",
        "s": [0],
        "w": [3]
    }, {
        "chinese": "雨爪永却",
        "id": 1037,
        "length": 4,
        "pinyin": "yzyq",
        "q": [3],
        "y": [0, 2],
        "z": [1]
    }, {
        "chinese": "佐贩跺限债蚂医",
        "d": [2],
        "f": [1],
        "id": 1038,
        "length": 7,
        "m": [5],
        "pinyin": "zfdxzmy",
        "x": [3],
        "y": [6],
        "z": [0, 4]
    }, {
        "c": [0],
        "chinese": "耻只洽蚜甩阁劣晤零潍",
        "g": [5],
        "id": 1039,
        "l": [6, 8],
        "length": 10,
        "pinyin": "czqysglwlw",
        "q": [2],
        "s": [4],
        "w": [7, 9],
        "y": [3],
        "z": [1]
    }, {
        "chinese": "勤圈恫反职耘讯",
        "d": [2],
        "f": [3],
        "id": 1040,
        "length": 7,
        "pinyin": "qqdfzyx",
        "q": [0, 1],
        "x": [6],
        "y": [5],
        "z": [4]
    }, {
        "chinese": "怠梗谣籍瞳虱",
        "d": [0],
        "g": [1],
        "id": 1041,
        "j": [3],
        "length": 6,
        "pinyin": "dgyjts",
        "s": [5],
        "t": [4],
        "y": [2]
    }, {
        "chinese": "筐褪谜富蹬锌冬服履兄",
        "d": [4, 6],
        "f": [3, 7],
        "id": 1042,
        "k": [0],
        "l": [8],
        "length": 10,
        "m": [2],
        "pinyin": "ktmfdxdflx",
        "t": [1],
        "x": [5, 9]
    }, {
        "chinese": "赠拴械寒稳",
        "h": [3],
        "id": 1043,
        "length": 5,
        "pinyin": "zsxhw",
        "s": [1],
        "w": [4],
        "x": [2],
        "z": [0]
    }, {
        "c": [0, 4],
        "chinese": "乘复摇岗诧",
        "f": [1],
        "g": [3],
        "id": 1044,
        "length": 5,
        "pinyin": "cfygc",
        "y": [2]
    }, {
        "b": [6],
        "chinese": "交郸菲洪胳鞠镑烂蛇葡",
        "d": [1],
        "f": [2],
        "g": [4],
        "h": [3],
        "id": 1045,
        "j": [0, 5],
        "l": [7],
        "length": 10,
        "p": [9],
        "pinyin": "jdfhgjblsp",
        "s": [8]
    }, {
        "chinese": "悬寂父即郧",
        "f": [2],
        "id": 1046,
        "j": [1, 3],
        "length": 5,
        "pinyin": "xjfjy",
        "x": [0],
        "y": [4]
    }, {
        "b": [3],
        "chinese": "哄鹅燥怖混乒",
        "e": [1],
        "h": [0, 4],
        "id": 1047,
        "length": 6,
        "p": [5],
        "pinyin": "hezbhp",
        "z": [2]
    }, {
        "b": [1],
        "c": [0, 2, 5],
        "chinese": "柴柏掺痔夺筹",
        "d": [4],
        "id": 1048,
        "length": 6,
        "pinyin": "cbczdc",
        "z": [3]
    }, {
        "c": [3],
        "chinese": "韶尖躲查坪",
        "d": [2],
        "id": 1049,
        "j": [1],
        "length": 5,
        "p": [4],
        "pinyin": "sjdcp",
        "s": [0]
    }, {
        "b": [2],
        "chinese": "菇肿崩时九涂莎节诺翻念",
        "f": [9],
        "g": [0],
        "id": 1050,
        "j": [4, 7],
        "length": 11,
        "n": [8, 10],
        "pinyin": "gzbsjtsjnfn",
        "s": [3, 6],
        "t": [5],
        "z": [1]
    }, {
        "c": [0, 6],
        "chinese": "菜蝗煎烷讼糜虫或委",
        "h": [1, 7],
        "id": 1051,
        "j": [2],
        "length": 9,
        "m": [5],
        "pinyin": "chjwsmchw",
        "s": [4],
        "w": [3, 8]
    }, {
        "b": [0],
        "c": [2, 7],
        "chinese": "邦棺藏崭怒搞稿瞅跌",
        "d": [8],
        "g": [1, 5, 6],
        "id": 1052,
        "length": 9,
        "n": [4],
        "pinyin": "bgcznggcd",
        "z": [3]
    }, {
        "c": [4, 5],
        "chinese": "团胰够呜凑吵体汉",
        "g": [2],
        "h": [7],
        "id": 1053,
        "length": 8,
        "pinyin": "tygwccth",
        "t": [0, 6],
        "w": [3],
        "y": [1]
    }, {
        "c": [1],
        "chinese": "妥残狭酿懂括严坞揍门伪",
        "d": [4],
        "id": 1054,
        "k": [5],
        "length": 11,
        "m": [9],
        "n": [3],
        "pinyin": "tcxndkywzmw",
        "t": [0],
        "w": [7, 10],
        "x": [2],
        "y": [6],
        "z": [8]
    }, {
        "chinese": "浙钙辗寥绘抬笋努顺寝",
        "g": [1],
        "h": [4],
        "id": 1055,
        "l": [3],
        "length": 10,
        "n": [2, 7],
        "pinyin": "zgnlhtsnsq",
        "q": [9],
        "s": [6, 8],
        "t": [5],
        "z": [0]
    }, {
        "chinese": "湾绥峦未瀑漱幕乍",
        "id": 1056,
        "l": [2],
        "length": 8,
        "m": [6],
        "p": [4],
        "pinyin": "wslwpsmz",
        "s": [1, 5],
        "w": [0, 3],
        "z": [7]
    }, {
        "c": [6],
        "chinese": "深孽玫邻谍呐澄李",
        "d": [4],
        "id": 1057,
        "l": [3, 7],
        "length": 8,
        "m": [2],
        "n": [1, 5],
        "pinyin": "snmldncl",
        "s": [0]
    }, {
        "b": [5],
        "c": [8],
        "chinese": "琵苇晋嗜术奔余卸参",
        "id": 1058,
        "j": [2],
        "length": 9,
        "p": [0],
        "pinyin": "pwjssbyxc",
        "s": [3, 4],
        "w": [1],
        "x": [7],
        "y": [6]
    }, {
        "chinese": "剩染绎墅垄圭继",
        "g": [5],
        "id": 1059,
        "j": [6],
        "l": [4],
        "length": 7,
        "pinyin": "sryslgj",
        "r": [1],
        "s": [0, 3],
        "y": [2]
    }, {
        "chinese": "妆日陋课",
        "id": 1060,
        "k": [3],
        "l": [2],
        "length": 4,
        "pinyin": "zrlk",
        "r": [1],
        "z": [0]
    }, {
        "c": [1, 9],
        "chinese": "吮骋氮吩耘邪忿艇丽车蹄",
        "d": [2],
        "f": [3, 6],
        "id": 1061,
        "l": [8],
        "length": 11,
        "pinyin": "scdfyxftlct",
        "s": [0],
        "t": [7, 10],
        "x": [5],
        "y": [4]
    }, {
        "b": [5],
        "chinese": "毫描将绢绵杯瑞篷",
        "h": [0],
        "id": 1062,
        "j": [2, 3],
        "length": 8,
        "m": [1, 4],
        "p": [7],
        "pinyin": "hmjjmbrp",
        "r": [6]
    }, {
        "c": [1],
        "chinese": "跃船停幕宵终仅",
        "id": 1063,
        "j": [6],
        "length": 7,
        "m": [3],
        "pinyin": "yctmxzj",
        "t": [2],
        "x": [4],
        "y": [0],
        "z": [5]
    }, {
        "a": [2],
        "b": [4],
        "chinese": "侯亡安褥悲侩近",
        "h": [0],
        "id": 1064,
        "j": [6],
        "k": [5],
        "length": 7,
        "pinyin": "hwarbkj",
        "r": [3],
        "w": [1]
    }, {
        "chinese": "罐谦侥追",
        "g": [0],
        "id": 1065,
        "j": [2],
        "length": 4,
        "pinyin": "gqjz",
        "q": [1],
        "z": [3]
    }, {
        "b": [2, 8],
        "chinese": "钠流弊瘸绪挑撇胳棒",
        "g": [7],
        "id": 1066,
        "l": [1],
        "length": 9,
        "n": [0],
        "p": [6],
        "pinyin": "nlbqxtpgb",
        "q": [3],
        "t": [5],
        "x": [4]
    }, {
        "c": [3, 7],
        "chinese": "猩税舷创河缮文衬汀嚏",
        "h": [4],
        "id": 1067,
        "length": 10,
        "pinyin": "xsxchswctt",
        "s": [1, 5],
        "t": [8, 9],
        "w": [6],
        "x": [0, 2]
    }, {
        "b": [1],
        "c": [2],
        "chinese": "羞膊差门",
        "id": 1068,
        "length": 4,
        "m": [3],
        "pinyin": "xbcm",
        "x": [0]
    }, {
        "b": [1],
        "chinese": "乎豹耸恶密覆傀撂",
        "e": [3],
        "f": [5],
        "g": [6],
        "h": [0],
        "id": 1069,
        "l": [7],
        "length": 8,
        "m": [4],
        "pinyin": "hbsemfgl",
        "s": [2]
    }, {
        "chinese": "痘溉捡艘沽魄",
        "d": [0],
        "g": [1, 4],
        "id": 1070,
        "j": [2],
        "length": 6,
        "p": [5],
        "pinyin": "dgjsgp",
        "s": [3]
    }, {
        "c": [4],
        "chinese": "俭渣凿追昌兰容",
        "id": 1071,
        "j": [0],
        "l": [5],
        "length": 7,
        "pinyin": "jzzzclr",
        "r": [6],
        "z": [1, 2, 3]
    }, {
        "chinese": "姆屡舀忧奖",
        "id": 1072,
        "j": [4],
        "l": [1],
        "length": 5,
        "m": [0],
        "pinyin": "mlyyj",
        "y": [2, 3]
    }, {
        "c": [2],
        "chinese": "缅孽捶酚",
        "f": [3],
        "id": 1073,
        "length": 4,
        "m": [0],
        "n": [1],
        "pinyin": "mncf"
    }, {
        "chinese": "尔讯献栅廊",
        "e": [0],
        "id": 1074,
        "l": [4],
        "length": 5,
        "pinyin": "exxzl",
        "x": [1, 2],
        "z": [3]
    }, {
        "c": [0],
        "chinese": "伺云喇畏牵寂",
        "id": 1075,
        "j": [5],
        "l": [2],
        "length": 6,
        "pinyin": "cylwqj",
        "q": [4],
        "w": [3],
        "y": [1]
    }, {
        "b": [8],
        "c": [5],
        "chinese": "铺聚柿苇克囱竣晰佰桂",
        "g": [9],
        "id": 1076,
        "j": [1, 6],
        "k": [4],
        "length": 10,
        "p": [0],
        "pinyin": "pjswkcjxbg",
        "s": [2],
        "w": [3],
        "x": [7]
    }, {
        "c": [3],
        "chinese": "箍晕刷撮潘彰狞掉咨",
        "d": [7],
        "g": [0],
        "id": 1077,
        "length": 9,
        "n": [6],
        "p": [4],
        "pinyin": "gyscpzndz",
        "s": [2],
        "y": [1],
        "z": [5, 8]
    }, {
        "c": [2],
        "chinese": "渊橇赤聂炼嘿甸",
        "d": [6],
        "h": [5],
        "id": 1078,
        "l": [4],
        "length": 7,
        "n": [3],
        "pinyin": "yqcnlhd",
        "q": [1],
        "y": [0]
    }, {
        "chinese": "缚呵功辽",
        "f": [0],
        "g": [2],
        "h": [1],
        "id": 1079,
        "l": [3],
        "length": 4,
        "pinyin": "fhgl"
    }, {
        "b": [4],
        "chinese": "胚丁龋捎毕垮痰哑庶恕韩",
        "d": [1],
        "h": [10],
        "id": 1080,
        "k": [5],
        "length": 11,
        "p": [0],
        "pinyin": "pdqsbktyssh",
        "q": [2],
        "s": [3, 8, 9],
        "t": [6],
        "y": [7]
    }, {
        "c": [2],
        "chinese": "改恋朝拂溜桌摘",
        "f": [3],
        "g": [0],
        "id": 1081,
        "l": [1, 4],
        "length": 7,
        "pinyin": "glcflzz",
        "z": [5, 6]
    }, {
        "b": [6],
        "c": [1],
        "chinese": "曼匆算嫡绢威惫来误担垮",
        "d": [3, 9],
        "id": 1082,
        "j": [4],
        "k": [10],
        "l": [7],
        "length": 11,
        "m": [0],
        "pinyin": "mcsdjwblwdk",
        "s": [2],
        "w": [5, 8]
    }, {
        "c": [3],
        "chinese": "纶祭甩磋悯赔烹顶",
        "d": [7],
        "id": 1083,
        "j": [1],
        "l": [0],
        "length": 8,
        "m": [4],
        "p": [5, 6],
        "pinyin": "ljscmppd",
        "s": [2]
    }, {
        "b": [2],
        "chinese": "点助边警稀雕梢呵模自厄",
        "d": [0, 5],
        "e": [10],
        "h": [7],
        "id": 1084,
        "j": [3],
        "length": 11,
        "m": [8],
        "pinyin": "dzbjxdshmze",
        "s": [6],
        "x": [4],
        "z": [1, 9]
    }, {
        "a": [1],
        "b": [10],
        "c": [9],
        "chinese": "虽矮河桂召郭童卡煞吵伯",
        "g": [3, 5],
        "h": [2],
        "id": 1085,
        "k": [7],
        "length": 11,
        "pinyin": "sahgzgtkscb",
        "s": [0, 8],
        "t": [6],
        "z": [4]
    }, {
        "chinese": "吮憾惦起没肤隙闺惯巡",
        "d": [2],
        "f": [5],
        "g": [7, 8],
        "h": [1],
        "id": 1086,
        "length": 10,
        "m": [4],
        "pinyin": "shdqmfxggx",
        "q": [3],
        "s": [0],
        "x": [6, 9]
    }, {
        "b": [7],
        "chinese": "哑循佐针切活悍败娥",
        "e": [8],
        "h": [5, 6],
        "id": 1087,
        "length": 9,
        "pinyin": "yxzzqhhbe",
        "q": [4],
        "x": [1],
        "y": [0],
        "z": [2, 3]
    }, {
        "c": [1],
        "chinese": "挟措县写",
        "id": 1088,
        "length": 4,
        "pinyin": "xcxx",
        "x": [0, 2, 3]
    }, {
        "b": [0, 5],
        "chinese": "冰酗确原腐部些",
        "f": [4],
        "id": 1089,
        "length": 7,
        "pinyin": "bxqyfbx",
        "q": [2],
        "x": [1, 6],
        "y": [3]
    }, {
        "b": [0],
        "c": [7],
        "chinese": "败侮跃楼洽仰天掺烃轰犊",
        "d": [10],
        "h": [9],
        "id": 1090,
        "l": [3],
        "length": 11,
        "pinyin": "bwylqytcthd",
        "q": [4],
        "t": [6, 8],
        "w": [1],
        "y": [2, 5]
    }, {
        "chinese": "旋恍硬屉芒涕瘤",
        "h": [1],
        "id": 1091,
        "l": [6],
        "length": 7,
        "m": [4],
        "pinyin": "xhytmtl",
        "t": [3, 5],
        "x": [0],
        "y": [2]
    }, {
        "chinese": "硅肪服檬啸",
        "f": [1, 2],
        "g": [0],
        "id": 1092,
        "length": 5,
        "m": [3],
        "pinyin": "gffmx",
        "x": [4]
    }, {
        "chinese": "津遂目须",
        "id": 1093,
        "j": [0],
        "length": 4,
        "m": [2],
        "pinyin": "jsmx",
        "s": [1],
        "x": [3]
    }, {
        "chinese": "血世椭鸳艘贺古囚萨怠",
        "d": [9],
        "g": [6],
        "h": [5],
        "id": 1094,
        "length": 10,
        "pinyin": "xstyshgqsd",
        "q": [7],
        "s": [1, 4, 8],
        "t": [2],
        "x": [0],
        "y": [3]
    }, {
        "chinese": "群呼帧顷",
        "h": [1],
        "id": 1095,
        "length": 4,
        "pinyin": "qhzq",
        "q": [0, 3],
        "z": [2]
    }, {
        "b": [2],
        "chinese": "猎感白石",
        "g": [1],
        "id": 1096,
        "l": [0],
        "length": 4,
        "pinyin": "lgbs",
        "s": [3]
    }, {
        "b": [2],
        "c": [5],
        "chinese": "藉钙柄论毫揣蔓漂裙滤滚",
        "g": [1, 10],
        "h": [4],
        "id": 1097,
        "j": [0],
        "l": [3, 9],
        "length": 11,
        "m": [6],
        "p": [7],
        "pinyin": "jgblhcmpqlg",
        "q": [8]
    }, {
        "chinese": "裸甸履虱契垒诫",
        "d": [1],
        "id": 1098,
        "j": [6],
        "l": [0, 2, 5],
        "length": 7,
        "pinyin": "ldlsqlj",
        "q": [4],
        "s": [3]
    }, {
        "chinese": "渠桩辱绍饲梢",
        "id": 1099,
        "length": 6,
        "pinyin": "qzrsss",
        "q": [0],
        "r": [2],
        "s": [3, 4, 5],
        "z": [1]
    }, {
        "b": [8],
        "chinese": "袍迪孙塘慰益氧社辨",
        "d": [1],
        "id": 1100,
        "length": 9,
        "p": [0],
        "pinyin": "pdstwyysb",
        "s": [2, 7],
        "t": [3],
        "w": [4],
        "y": [5, 6]
    }, {
        "chinese": "湿待勤奄",
        "d": [1],
        "id": 1101,
        "length": 4,
        "pinyin": "sdqy",
        "q": [2],
        "s": [0],
        "y": [3]
    }, {
        "c": [0],
        "chinese": "超慷辛亏强",
        "id": 1102,
        "k": [1, 3],
        "length": 5,
        "pinyin": "ckxkq",
        "q": [4],
        "x": [2]
    }, {
        "b": [3],
        "chinese": "抠顶砖傍尧",
        "d": [1],
        "id": 1103,
        "k": [0],
        "length": 5,
        "pinyin": "kdzby",
        "y": [4],
        "z": [2]
    }, {
        "chinese": "解吾阀扬咸仑",
        "f": [2],
        "id": 1104,
        "j": [0],
        "l": [5],
        "length": 6,
        "pinyin": "jwfyxl",
        "w": [1],
        "x": [4],
        "y": [3]
    }, {
        "c": [3],
        "chinese": "酋诀喝丑裙算",
        "h": [2],
        "id": 1105,
        "j": [1],
        "length": 6,
        "pinyin": "qjhcqs",
        "q": [0, 4],
        "s": [5]
    }, {
        "b": [1],
        "chinese": "胶哺堪离",
        "id": 1106,
        "j": [0],
        "k": [2],
        "l": [3],
        "length": 4,
        "pinyin": "jbkl"
    }, {
        "b": [5],
        "c": [2],
        "chinese": "囊姨铲化由避咬哗肢",
        "h": [3, 7],
        "id": 1107,
        "length": 9,
        "n": [0],
        "pinyin": "nychybyhz",
        "y": [1, 4, 6],
        "z": [8]
    }, {
        "c": [7],
        "chinese": "蛆劲梗滑掏傣互宠缸",
        "d": [5],
        "g": [2, 8],
        "h": [3, 6],
        "id": 1108,
        "j": [1],
        "length": 9,
        "pinyin": "qjghtdhcg",
        "q": [0],
        "t": [4]
    }, {
        "chinese": "劳诲缝退恰资法墒秀窒",
        "f": [2, 6],
        "h": [1],
        "id": 1109,
        "l": [0],
        "length": 10,
        "pinyin": "lhftqzfsxz",
        "q": [4],
        "s": [7],
        "t": [3],
        "x": [8],
        "z": [5, 9]
    }, {
        "chinese": "真擒浆肝",
        "g": [3],
        "id": 1110,
        "j": [2],
        "length": 4,
        "pinyin": "zqjg",
        "q": [1],
        "z": [0]
    }, {
        "b": [4],
        "chinese": "商宜韧汇苯染亏弘",
        "h": [3, 7],
        "id": 1111,
        "k": [6],
        "length": 8,
        "pinyin": "syrhbrkh",
        "r": [2, 5],
        "s": [0],
        "y": [1]
    }, {
        "chinese": "淫头诫郎谬薛夹索",
        "id": 1112,
        "j": [2, 6],
        "l": [3],
        "length": 8,
        "m": [4],
        "pinyin": "ytjlmxjs",
        "s": [7],
        "t": [1],
        "x": [5],
        "y": [0]
    }, {
        "c": [1],
        "chinese": "源绰翼录陇瘦丝讣帐",
        "f": [7],
        "id": 1113,
        "l": [3, 4],
        "length": 9,
        "pinyin": "ycyllssfz",
        "s": [5, 6],
        "y": [0, 2],
        "z": [8]
    }, {
        "b": [1, 5],
        "chinese": "晴箔毫性天宾缩卖擒桌呸",
        "h": [2],
        "id": 1114,
        "length": 11,
        "m": [7],
        "p": [10],
        "pinyin": "qbhxtbsmqzp",
        "q": [0, 8],
        "s": [6],
        "t": [4],
        "x": [3],
        "z": [9]
    }, {
        "b": [6],
        "chinese": "堪离蛰抿盆镁拌娱捧",
        "id": 1115,
        "k": [0],
        "l": [1],
        "length": 9,
        "m": [3, 5],
        "p": [4, 8],
        "pinyin": "klzmpmbyp",
        "y": [7],
        "z": [2]
    }, {
        "chinese": "懈惰煤块",
        "d": [1],
        "id": 1116,
        "k": [3],
        "length": 4,
        "m": [2],
        "pinyin": "xdmk",
        "x": [0]
    }, {
        "c": [3],
        "chinese": "穷帧授曾仕掩粉",
        "f": [6],
        "id": 1117,
        "length": 7,
        "pinyin": "qzscsyf",
        "q": [0],
        "s": [2, 4],
        "y": [5],
        "z": [1]
    }, {
        "chinese": "曝羚核西个逾寝胁殉",
        "g": [4],
        "h": [2],
        "id": 1118,
        "l": [1],
        "length": 9,
        "p": [0],
        "pinyin": "plhxgyqxx",
        "q": [6],
        "x": [3, 7, 8],
        "y": [5]
    }, {
        "chinese": "抡桩龄现久戌胳块",
        "g": [6],
        "id": 1119,
        "j": [4],
        "k": [7],
        "l": [0, 2],
        "length": 8,
        "pinyin": "lzlxjxgk",
        "x": [3, 5],
        "z": [1]
    }, {
        "b": [4],
        "chinese": "艘貉痈谩耙獭腋甩",
        "h": [1],
        "id": 1120,
        "length": 8,
        "m": [3],
        "pinyin": "shymbtys",
        "s": [0, 7],
        "t": [5],
        "y": [2, 6]
    }, {
        "b": [8],
        "c": [2, 3],
        "chinese": "续肋除睬冉烟率丰彬",
        "f": [7],
        "id": 1121,
        "l": [1, 6],
        "length": 9,
        "pinyin": "xlccrylfb",
        "r": [4],
        "x": [0],
        "y": [5]
    }, {
        "b": [7],
        "c": [0, 1],
        "chinese": "材雌讹翌雄饭龙霸",
        "e": [2],
        "f": [5],
        "id": 1122,
        "l": [6],
        "length": 8,
        "pinyin": "cceyxflb",
        "x": [4],
        "y": [3]
    }, {
        "chinese": "倪耀拢究竭母雾",
        "id": 1123,
        "j": [3, 4],
        "l": [2],
        "length": 7,
        "m": [5],
        "n": [0],
        "pinyin": "nyljjmw",
        "w": [6],
        "y": [1]
    }, {
        "a": [8],
        "chinese": "圭毒雇延巡憾赫升昂",
        "d": [1],
        "g": [0, 2],
        "h": [5, 6],
        "id": 1124,
        "length": 9,
        "pinyin": "gdgyxhhsa",
        "s": [7],
        "x": [4],
        "y": [3]
    }, {
        "chinese": "嘻穷旬举上猾证",
        "h": [5],
        "id": 1125,
        "j": [3],
        "length": 7,
        "pinyin": "xqxjshz",
        "q": [1],
        "s": [4],
        "x": [0, 2],
        "z": [6]
    }, {
        "a": [7],
        "chinese": "霜隶授锅名佩唆矮",
        "g": [3],
        "id": 1126,
        "l": [1],
        "length": 8,
        "m": [4],
        "p": [5],
        "pinyin": "slsgmpsa",
        "s": [0, 2, 6]
    }, {
        "b": [5],
        "c": [3],
        "chinese": "条巫舟川受哺郑雅",
        "id": 1127,
        "length": 8,
        "pinyin": "twzcsbzy",
        "s": [4],
        "t": [0],
        "w": [1],
        "y": [7],
        "z": [2, 6]
    }, {
        "b": [7, 8],
        "chinese": "急括祥拧盏袒站卑贬音匈",
        "id": 1128,
        "j": [0],
        "k": [1],
        "length": 11,
        "n": [3],
        "pinyin": "jkxnztzbbyx",
        "t": [5],
        "x": [2, 10],
        "y": [9],
        "z": [4, 6]
    }, {
        "chinese": "卧瘤族懦",
        "id": 1129,
        "l": [1],
        "length": 4,
        "n": [3],
        "pinyin": "wlzn",
        "w": [0],
        "z": [2]
    }, {
        "c": [0],
        "chinese": "乘漠离激氟藐酮砌恶",
        "e": [8],
        "f": [4],
        "id": 1130,
        "j": [3],
        "l": [2],
        "length": 9,
        "m": [1, 5],
        "pinyin": "cmljfmtqe",
        "q": [7],
        "t": [6]
    }, {
        "b": [7],
        "c": [6],
        "chinese": "画央捆盏脯纳酬箔伐",
        "f": [8],
        "h": [0],
        "id": 1131,
        "k": [2],
        "length": 9,
        "n": [5],
        "p": [4],
        "pinyin": "hykzpncbf",
        "y": [1],
        "z": [3]
    }, {
        "a": [6],
        "b": [2],
        "chinese": "涩真补拼念鲤爱",
        "id": 1132,
        "l": [5],
        "length": 7,
        "n": [4],
        "p": [3],
        "pinyin": "szbpnla",
        "s": [0],
        "z": [1]
    }, {
        "chinese": "狼周旱献清循",
        "h": [2],
        "id": 1133,
        "l": [0],
        "length": 6,
        "pinyin": "lzhxqx",
        "q": [4],
        "x": [3, 5],
        "z": [1]
    }, {
        "c": [1],
        "chinese": "嘶车严疡昧运",
        "id": 1134,
        "length": 6,
        "m": [4],
        "pinyin": "scyymy",
        "s": [0],
        "y": [2, 3, 5]
    }, {
        "b": [1],
        "c": [0],
        "chinese": "淬闭塞铸掠盆大康积闲哥",
        "d": [6],
        "g": [10],
        "id": 1135,
        "j": [8],
        "k": [7],
        "l": [4],
        "length": 11,
        "p": [5],
        "pinyin": "cbszlpdkjxg",
        "s": [2],
        "x": [9],
        "z": [3]
    }, {
        "a": [0, 2],
        "b": [4, 5, 8],
        "chinese": "氨牧蔼渍剥哺鸯申霸",
        "id": 1136,
        "length": 9,
        "m": [1],
        "pinyin": "amazbbysb",
        "s": [7],
        "y": [6],
        "z": [3]
    }, {
        "b": [5],
        "c": [8],
        "chinese": "节那蒜剑握表繁擎矗",
        "f": [6],
        "id": 1137,
        "j": [0, 3],
        "length": 9,
        "n": [1],
        "pinyin": "jnsjwbfqc",
        "q": [7],
        "s": [2],
        "w": [4]
    }, {
        "c": [8],
        "chinese": "重凄信哗腥等是胸绰咖瑞",
        "d": [5],
        "h": [3],
        "id": 1138,
        "k": [9],
        "length": 11,
        "pinyin": "zqxhxdsxckr",
        "q": [1],
        "r": [10],
        "s": [6],
        "x": [2, 4, 7],
        "z": [0]
    }, {
        "b": [10],
        "chinese": "乓供凶债酮贱党龋萌庆苞",
        "d": [6],
        "g": [1],
        "id": 1139,
        "j": [5],
        "length": 11,
        "m": [8],
        "p": [0],
        "pinyin": "pgxztjdqmqb",
        "q": [7, 9],
        "t": [4],
        "x": [2],
        "z": [3]
    }, {
        "c": [2],
        "chinese": "墅荔出担帧",
        "d": [3],
        "id": 1140,
        "l": [1],
        "length": 5,
        "pinyin": "slcdz",
        "s": [0],
        "z": [4]
    }, {
        "chinese": "懂陕莱谆六社饭谎弗",
        "d": [0],
        "f": [6, 8],
        "h": [7],
        "id": 1141,
        "l": [2, 4],
        "length": 9,
        "pinyin": "dslzlsfhf",
        "s": [1, 5],
        "z": [3]
    }, {
        "chinese": "伏客末曲皋歉抉蓟锰们",
        "f": [0],
        "g": [4],
        "id": 1142,
        "j": [6, 7],
        "k": [1],
        "length": 10,
        "m": [2, 8, 9],
        "pinyin": "fkmqgqjjmm",
        "q": [3, 5]
    }, {
        "b": [3],
        "c": [2],
        "chinese": "魏辊雌卑",
        "g": [1],
        "id": 1143,
        "length": 4,
        "pinyin": "wgcb",
        "w": [0]
    }, {
        "b": [4],
        "c": [8],
        "chinese": "溃缚哦沤卞敬厌盼丑提",
        "f": [1],
        "id": 1144,
        "j": [5],
        "k": [0],
        "length": 10,
        "o": [2, 3],
        "p": [7],
        "pinyin": "kfoobjypct",
        "t": [9],
        "y": [6]
    }, {
        "b": [7],
        "chinese": "晦算调龄申挑榴怖氛糠候",
        "d": [2],
        "f": [8],
        "h": [0, 10],
        "id": 1145,
        "k": [9],
        "l": [3, 6],
        "length": 11,
        "pinyin": "hsdlstlbfkh",
        "s": [1, 4],
        "t": [5]
    }, {
        "c": [5],
        "chinese": "妇夜茁噬腥惩投裔跌",
        "d": [8],
        "f": [0],
        "id": 1146,
        "length": 9,
        "pinyin": "fyzsxctyd",
        "s": [3],
        "t": [6],
        "x": [4],
        "y": [1, 7],
        "z": [2]
    }, {
        "a": [5],
        "b": [3],
        "chinese": "狡滴惠变项胺",
        "d": [1],
        "h": [2],
        "id": 1147,
        "j": [0],
        "length": 6,
        "pinyin": "jdhbxa",
        "x": [4]
    }, {
        "b": [9],
        "c": [5],
        "chinese": "来忿氢侣演餐镍一管勃篱",
        "f": [1],
        "g": [8],
        "id": 1148,
        "l": [0, 3, 10],
        "length": 11,
        "n": [6],
        "pinyin": "lfqlycnygbl",
        "q": [2],
        "y": [4, 7]
    }, {
        "c": [1],
        "chinese": "明察姥页稽寡",
        "g": [5],
        "id": 1149,
        "j": [4],
        "l": [2],
        "length": 6,
        "m": [0],
        "pinyin": "mclyjg",
        "y": [3]
    }, {
        "c": [3],
        "chinese": "饿里秃测僵碘",
        "d": [5],
        "e": [0],
        "id": 1150,
        "j": [4],
        "l": [1],
        "length": 6,
        "pinyin": "eltcjd",
        "t": [2]
    }, {
        "c": [1, 2],
        "chinese": "艰囱称孙帕",
        "id": 1151,
        "j": [0],
        "length": 5,
        "p": [4],
        "pinyin": "jccsp",
        "s": [3]
    }, {
        "c": [2],
        "chinese": "故胰驰械更",
        "g": [0, 4],
        "id": 1152,
        "length": 5,
        "pinyin": "gycxg",
        "x": [3],
        "y": [1]
    }, {
        "chinese": "旧中沙杉",
        "id": 1153,
        "j": [0],
        "length": 4,
        "pinyin": "jzss",
        "s": [2, 3],
        "z": [1]
    }, {
        "a": [7],
        "b": [2],
        "chinese": "股酗谤硬酸说没岸",
        "g": [0],
        "id": 1154,
        "length": 8,
        "m": [6],
        "pinyin": "gxbyssma",
        "s": [4, 5],
        "x": [1],
        "y": [3]
    }, {
        "chinese": "凌墙静托仙株",
        "id": 1155,
        "j": [2],
        "l": [0],
        "length": 6,
        "pinyin": "lqjtxz",
        "q": [1],
        "t": [3],
        "x": [4],
        "z": [5]
    }, {
        "chinese": "箕裕喜温久枷践失娟",
        "id": 1156,
        "j": [0, 4, 5, 6, 8],
        "length": 9,
        "pinyin": "jyxwjjjsj",
        "s": [7],
        "w": [3],
        "x": [2],
        "y": [1]
    }, {
        "chinese": "阵羌零泽迭埔武",
        "d": [4],
        "id": 1157,
        "l": [2],
        "length": 7,
        "p": [5],
        "pinyin": "zqlzdpw",
        "q": [1],
        "w": [6],
        "z": [0, 3]
    }, {
        "chinese": "帖虐禹徽斡渗",
        "h": [3],
        "id": 1158,
        "length": 6,
        "n": [1],
        "pinyin": "tnyhws",
        "s": [5],
        "t": [0],
        "w": [4],
        "y": [2]
    }, {
        "b": [3],
        "chinese": "钳庆志斌狐俞囊琐颠啸",
        "d": [8],
        "h": [4],
        "id": 1159,
        "length": 10,
        "n": [6],
        "pinyin": "qqzbhynsdx",
        "q": [0, 1],
        "s": [7],
        "x": [9],
        "y": [5],
        "z": [2]
    }, {
        "b": [4],
        "chinese": "枕给宛灰暴曲蛀灌肤",
        "f": [8],
        "g": [1, 7],
        "h": [3],
        "id": 1160,
        "length": 9,
        "pinyin": "zgwhbqzgf",
        "q": [5],
        "w": [2],
        "z": [0, 6]
    }, {
        "c": [8],
        "chinese": "蜒乱入顾舞绿条望曾宽逻",
        "g": [3],
        "id": 1161,
        "k": [9],
        "l": [1, 5, 10],
        "length": 11,
        "pinyin": "ylrgwltwckl",
        "r": [2],
        "t": [6],
        "w": [4, 7],
        "y": [0]
    }, {
        "chinese": "赃杜替疗",
        "d": [1],
        "id": 1162,
        "l": [3],
        "length": 4,
        "pinyin": "zdtl",
        "t": [2],
        "z": [0]
    }, {
        "b": [3],
        "chinese": "页雪榴波角",
        "id": 1163,
        "j": [4],
        "l": [2],
        "length": 5,
        "pinyin": "yxlbj",
        "x": [1],
        "y": [0]
    }, {
        "b": [0],
        "chinese": "抱杰俭谴挽",
        "id": 1164,
        "j": [1, 2],
        "length": 5,
        "pinyin": "bjjqw",
        "q": [3],
        "w": [4]
    }, {
        "a": [7],
        "c": [8],
        "chinese": "蚁抑亢蕉帆夹屎翱词奸",
        "f": [4],
        "id": 1165,
        "j": [3, 5, 9],
        "k": [2],
        "length": 10,
        "pinyin": "yykjfjsacj",
        "s": [6],
        "y": [0, 1]
    }, {
        "chinese": "防呢咐润强",
        "f": [0, 2],
        "id": 1166,
        "length": 5,
        "n": [1],
        "pinyin": "fnfrq",
        "q": [4],
        "r": [3]
    }, {
        "a": [5],
        "c": [2],
        "chinese": "讨趾疵憎拓敖渐拿",
        "id": 1167,
        "j": [6],
        "length": 8,
        "n": [7],
        "pinyin": "tzcztajn",
        "t": [0, 4],
        "z": [1, 3]
    }, {
        "b": [2, 3],
        "chinese": "为您辨佰洱来",
        "e": [4],
        "id": 1168,
        "l": [5],
        "length": 6,
        "n": [1],
        "pinyin": "wnbbel",
        "w": [0]
    }, {
        "a": [5],
        "c": [6],
        "chinese": "藕区怕野筋奥蹿随庶佑矣",
        "id": 1169,
        "j": [4],
        "length": 11,
        "o": [0],
        "p": [2],
        "pinyin": "oqpyjacssyy",
        "q": [1],
        "s": [7, 8],
        "y": [3, 9, 10]
    }, {
        "chinese": "彝将鬃珊诀枪嘻橇确盆",
        "id": 1170,
        "j": [1, 4],
        "length": 10,
        "p": [9],
        "pinyin": "yjzsjqxqqp",
        "q": [5, 7, 8],
        "s": [3],
        "x": [6],
        "y": [0],
        "z": [2]
    }, {
        "b": [0, 10],
        "c": [2],
        "chinese": "表岛尝链狱较缸疯梭衫宾",
        "d": [1],
        "f": [7],
        "g": [6],
        "id": 1171,
        "j": [5],
        "l": [3],
        "length": 11,
        "pinyin": "bdclyjgfssb",
        "s": [8, 9],
        "y": [4]
    }, {
        "c": [3],
        "chinese": "颐憨政刺紫弓",
        "g": [5],
        "h": [1],
        "id": 1172,
        "length": 6,
        "pinyin": "yhzczg",
        "y": [0],
        "z": [2, 4]
    }, {
        "chinese": "拴某堕延蓬舜掌虚庞",
        "d": [2],
        "id": 1173,
        "length": 9,
        "m": [1],
        "p": [4, 8],
        "pinyin": "smdypszxp",
        "s": [0, 5],
        "x": [7],
        "y": [3],
        "z": [6]
    }, {
        "a": [7],
        "chinese": "劫菲胆碱它侩郧翱移趋",
        "d": [2],
        "f": [1],
        "id": 1174,
        "j": [0, 3],
        "k": [5],
        "length": 10,
        "pinyin": "jfdjtkyayq",
        "q": [9],
        "t": [4],
        "y": [6, 8]
    }, {
        "chinese": "倘罩资钥粒蹈佣馈",
        "d": [5],
        "id": 1175,
        "k": [7],
        "l": [4],
        "length": 8,
        "pinyin": "tzzyldyk",
        "t": [0],
        "y": [3, 6],
        "z": [1, 2]
    }, {
        "b": [6],
        "chinese": "思疏予撰紫亦邦",
        "id": 1176,
        "length": 7,
        "pinyin": "ssyzzyb",
        "s": [0, 1],
        "y": [2, 5],
        "z": [3, 4]
    }, {
        "chinese": "洁剩尹雨飘镰戎麦",
        "id": 1177,
        "j": [0],
        "l": [5],
        "length": 8,
        "m": [7],
        "p": [4],
        "pinyin": "jsyyplrm",
        "r": [6],
        "s": [1],
        "y": [2, 3]
    }, {
        "chinese": "贵坍哉泽巷升阳",
        "g": [0],
        "id": 1178,
        "length": 7,
        "pinyin": "gtzzxsy",
        "s": [5],
        "t": [1],
        "x": [4],
        "y": [6],
        "z": [2, 3]
    }, {
        "chinese": "婴烽悍捣襄缝遮脸蚜割",
        "d": [3],
        "f": [1, 5],
        "g": [9],
        "h": [2],
        "id": 1179,
        "l": [7],
        "length": 10,
        "pinyin": "yfhdxfzlyg",
        "x": [4],
        "y": [0, 8],
        "z": [6]
    }, {
        "chinese": "膳么洼完衫镜振虑呀",
        "id": 1180,
        "j": [5],
        "l": [7],
        "length": 9,
        "m": [1],
        "pinyin": "smwwsjzly",
        "s": [0, 4],
        "w": [2, 3],
        "y": [8],
        "z": [6]
    }, {
        "b": [4],
        "c": [1],
        "chinese": "主惨筋否膘惺润商赋",
        "f": [3, 8],
        "id": 1181,
        "j": [2],
        "length": 9,
        "pinyin": "zcjfbxrsf",
        "r": [6],
        "s": [7],
        "x": [5],
        "z": [0]
    }, {
        "c": [3],
        "chinese": "驴陕卸础少缄类铬",
        "g": [7],
        "id": 1182,
        "j": [5],
        "l": [0, 6],
        "length": 8,
        "pinyin": "lsxcsjlg",
        "s": [1, 4],
        "x": [2]
    }, {
        "c": [5],
        "chinese": "烬基妊塔贷础欧再",
        "d": [4],
        "id": 1183,
        "j": [0, 1],
        "length": 8,
        "o": [6],
        "pinyin": "jjrtdcoz",
        "r": [2],
        "t": [3],
        "z": [7]
    }, {
        "b": [4],
        "chinese": "朋织腾膏班",
        "g": [3],
        "id": 1184,
        "length": 5,
        "p": [0],
        "pinyin": "pztgb",
        "t": [2],
        "z": [1]
    }, {
        "chinese": "禽久嚣悠芒论魁啄竿渗",
        "g": [8],
        "id": 1185,
        "j": [1],
        "k": [6],
        "l": [5],
        "length": 10,
        "m": [4],
        "pinyin": "qjxymlkzgs",
        "q": [0],
        "s": [9],
        "x": [2],
        "y": [3],
        "z": [7]
    }, {
        "c": [0],
        "chinese": "忱克火怂钟抨",
        "h": [2],
        "id": 1186,
        "k": [1],
        "length": 6,
        "p": [5],
        "pinyin": "ckhszp",
        "s": [3],
        "z": [4]
    }, {
        "chinese": "荧鲸沸焉识摇",
        "f": [2],
        "id": 1187,
        "j": [1],
        "length": 6,
        "pinyin": "yjfysy",
        "s": [4],
        "y": [0, 3, 5]
    }, {
        "c": [0],
        "chinese": "赤键的匿屑虏",
        "d": [2],
        "id": 1188,
        "j": [1],
        "l": [5],
        "length": 6,
        "n": [3],
        "pinyin": "cjdnxl",
        "x": [4]
    }, {
        "chinese": "列历雕旋熟详叛吸褥敷釉",
        "d": [2],
        "f": [9],
        "id": 1189,
        "l": [0, 1],
        "length": 11,
        "p": [6],
        "pinyin": "lldxsxpxrfy",
        "r": [8],
        "s": [4],
        "x": [3, 5, 7],
        "y": [10]
    }, {
        "c": [0, 6],
        "chinese": "催靛彭塘等壶瓷遗豌",
        "d": [1, 4],
        "h": [5],
        "id": 1190,
        "length": 9,
        "p": [2],
        "pinyin": "cdptdhcyw",
        "t": [3],
        "w": [8],
        "y": [7]
    }, {
        "chinese": "札独亚苫娇纶桓涕",
        "d": [1],
        "h": [6],
        "id": 1191,
        "j": [4],
        "l": [5],
        "length": 8,
        "pinyin": "zdysjlht",
        "s": [3],
        "t": [7],
        "y": [2],
        "z": [0]
    }, {
        "b": [10],
        "c": [3, 4],
        "chinese": "烤汁现策骋呀闷待裔渊冰",
        "d": [7],
        "id": 1192,
        "k": [0],
        "length": 11,
        "m": [6],
        "pinyin": "kzxccymdyyb",
        "x": [2],
        "y": [5, 8, 9],
        "z": [1]
    }, {
        "b": [4],
        "c": [2],
        "chinese": "离烙纯猿败挽蟹匙",
        "id": 1193,
        "l": [0, 1],
        "length": 8,
        "pinyin": "llcybwxs",
        "s": [7],
        "w": [5],
        "x": [6],
        "y": [3]
    }, {
        "chinese": "厉射柑匡",
        "g": [2],
        "id": 1194,
        "k": [3],
        "l": [0],
        "length": 4,
        "pinyin": "lsgk",
        "s": [1]
    }, {
        "chinese": "荤擒民宏",
        "h": [0, 3],
        "id": 1195,
        "length": 4,
        "m": [2],
        "pinyin": "hqmh",
        "q": [1]
    }, {
        "b": [1],
        "chinese": "忿拜渍煤",
        "f": [0],
        "id": 1196,
        "length": 4,
        "m": [3],
        "pinyin": "fbzm",
        "z": [2]
    }, {
        "chinese": "扰赎媒侠恼殿绒贰肩墓",
        "d": [5],
        "e": [7],
        "id": 1197,
        "j": [8],
        "length": 10,
        "m": [2, 9],
        "n": [4],
        "pinyin": "rsmxndrejm",
        "r": [0, 6],
        "s": [1],
        "x": [3]
    }, {
        "c": [8],
        "chinese": "府勾卓酣迄起啼扣捶璃迢",
        "f": [0],
        "g": [1],
        "h": [3],
        "id": 1198,
        "k": [7],
        "l": [9],
        "length": 11,
        "pinyin": "fgzhqqtkclt",
        "q": [4, 5],
        "t": [6, 10],
        "z": [2]
    }, {
        "c": [5],
        "chinese": "青镁诸燥忻馋施码核嗅",
        "h": [8],
        "id": 1199,
        "length": 10,
        "m": [1, 7],
        "pinyin": "qmzzxcsmhx",
        "q": [0],
        "s": [6],
        "x": [4, 9],
        "z": [2, 3]
    }, {
        "chinese": "啮扶谁顾晚巫矾士基",
        "f": [1, 6],
        "g": [3],
        "id": 1200,
        "j": [8],
        "length": 9,
        "n": [0],
        "pinyin": "nfsgwwfsj",
        "s": [2, 7],
        "w": [4, 5]
    }, {
        "b": [4, 10],
        "c": [0, 2],
        "chinese": "成户摧梭憋症师慕摔蛙甭",
        "h": [1],
        "id": 1201,
        "length": 11,
        "m": [7],
        "pinyin": "chcsbzsmswb",
        "s": [3, 6, 8],
        "w": [9],
        "z": [5]
    }, {
        "chinese": "婆誊肇帅嫁苑疯睫丁批",
        "d": [8],
        "f": [6],
        "id": 1202,
        "j": [4, 7],
        "length": 10,
        "p": [0, 9],
        "pinyin": "ptzsjyfjdp",
        "s": [3],
        "t": [1],
        "y": [5],
        "z": [2]
    }, {
        "chinese": "矾曝筋址嫌然",
        "f": [0],
        "id": 1203,
        "j": [2],
        "length": 6,
        "p": [1],
        "pinyin": "fpjzxr",
        "r": [5],
        "x": [4],
        "z": [3]
    }, {
        "c": [2],
        "chinese": "牢阑蹭田盅篱得叮暂诺帆",
        "d": [6, 7],
        "f": [10],
        "id": 1204,
        "l": [0, 1, 5],
        "length": 11,
        "n": [9],
        "pinyin": "llctzlddznf",
        "t": [3],
        "z": [4, 8]
    }, {
        "c": [0],
        "chinese": "草斤棋岛秦牺",
        "d": [3],
        "id": 1205,
        "j": [1],
        "length": 6,
        "pinyin": "cjqdqx",
        "q": [2, 4],
        "x": [5]
    }, {
        "a": [9],
        "c": [7],
        "chinese": "腆狗坑喳眯坞奎厕骑澳",
        "g": [1],
        "id": 1206,
        "k": [2, 6],
        "length": 10,
        "m": [4],
        "pinyin": "tgkzmwkcqa",
        "q": [8],
        "t": [0],
        "w": [5],
        "z": [3]
    }, {
        "c": [1],
        "chinese": "娠翠衙歧镀优弘钳墟",
        "d": [4],
        "h": [6],
        "id": 1207,
        "length": 9,
        "pinyin": "scyqdyhqx",
        "q": [3, 7],
        "s": [0],
        "x": [8],
        "y": [2, 5]
    }, {
        "chinese": "坠芦畔牺",
        "id": 1208,
        "l": [1],
        "length": 4,
        "p": [2],
        "pinyin": "zlpx",
        "x": [3],
        "z": [0]
    }, {
        "chinese": "注翔诫舜癸彤砰慧蛮沏燥",
        "g": [4],
        "h": [7],
        "id": 1209,
        "j": [2],
        "length": 11,
        "m": [8],
        "p": [6],
        "pinyin": "zxjsgtphmqz",
        "q": [9],
        "s": [3],
        "t": [5],
        "x": [1],
        "z": [0, 10]
    }, {
        "chinese": "锰丈鄂勇剪",
        "e": [2],
        "id": 1210,
        "j": [4],
        "length": 5,
        "m": [0],
        "pinyin": "mzeyj",
        "y": [3],
        "z": [1]
    }, {
        "b": [6],
        "chinese": "眺瀑郎壮儡即埠",
        "id": 1211,
        "j": [5],
        "l": [2, 4],
        "length": 7,
        "p": [1],
        "pinyin": "tplzljb",
        "t": [0],
        "z": [3]
    }, {
        "c": [5],
        "chinese": "羊祟主锑服淬怀态",
        "f": [4],
        "h": [6],
        "id": 1212,
        "length": 8,
        "pinyin": "ysztfcht",
        "s": [1],
        "t": [3, 7],
        "y": [0],
        "z": [2]
    }, {
        "chinese": "声嵌钦糜壮屿岂蝇描遣拇",
        "id": 1213,
        "length": 11,
        "m": [3, 8, 10],
        "pinyin": "sqqmzyqymqm",
        "q": [1, 2, 6, 9],
        "s": [0],
        "y": [5, 7],
        "z": [4]
    }, {
        "c": [3],
        "chinese": "委诽颜稠",
        "f": [1],
        "id": 1214,
        "length": 4,
        "pinyin": "wfyc",
        "w": [0],
        "y": [2]
    }, {
        "b": [0],
        "chinese": "笔帜殷沙样慑芳",
        "f": [6],
        "id": 1215,
        "length": 7,
        "pinyin": "bzysysf",
        "s": [3, 5],
        "y": [2, 4],
        "z": [1]
    }, {
        "c": [5],
        "chinese": "另等辛爹竟瘁下来",
        "d": [1, 3],
        "id": 1216,
        "j": [4],
        "l": [0, 7],
        "length": 8,
        "pinyin": "ldxdjcxl",
        "x": [2, 6]
    }, {
        "c": [0],
        "chinese": "插御佣代爪",
        "d": [3],
        "id": 1217,
        "length": 5,
        "pinyin": "cyydz",
        "y": [1, 2],
        "z": [4]
    }, {
        "c": [7],
        "chinese": "柜攒庞宦箩乳骆测砰",
        "g": [0],
        "h": [3],
        "id": 1218,
        "l": [4, 6],
        "length": 9,
        "p": [2, 8],
        "pinyin": "gzphlrlcp",
        "r": [5],
        "z": [1]
    }, {
        "chinese": "尉又伤框浓逸激蒲旦",
        "d": [8],
        "id": 1219,
        "j": [6],
        "k": [3],
        "length": 9,
        "n": [4],
        "p": [7],
        "pinyin": "wysknyjpd",
        "s": [2],
        "w": [0],
        "y": [1, 5]
    }, {
        "b": [3],
        "chinese": "沙帽贞鳖途瘴",
        "id": 1220,
        "length": 6,
        "m": [1],
        "pinyin": "smzbtz",
        "s": [0],
        "t": [4],
        "z": [2, 5]
    }, {
        "chinese": "撒瞥塌瘦赔秀哪撬蜡",
        "id": 1221,
        "l": [8],
        "length": 9,
        "n": [6],
        "p": [1, 4],
        "pinyin": "sptspxnql",
        "q": [7],
        "s": [0, 3],
        "t": [2],
        "x": [5]
    }, {
        "chinese": "鹿囤遁滥辊衔帖损芯景",
        "d": [1, 2],
        "g": [4],
        "id": 1222,
        "j": [9],
        "l": [0, 3],
        "length": 10,
        "pinyin": "lddlgxtsxj",
        "s": [7],
        "t": [6],
        "x": [5, 8]
    }, {
        "b": [3],
        "chinese": "旦药泣博忘蜗弧歉",
        "d": [0],
        "h": [6],
        "id": 1223,
        "length": 8,
        "pinyin": "dyqbwwhq",
        "q": [2, 7],
        "w": [4, 5],
        "y": [1]
    }, {
        "b": [0],
        "chinese": "濒攫陵僳欺刻粱",
        "id": 1224,
        "j": [1],
        "k": [5],
        "l": [2, 6],
        "length": 7,
        "pinyin": "bjlsqkl",
        "q": [4],
        "s": [3]
    }, {
        "chinese": "舌遁疲搜械瞥",
        "d": [1],
        "id": 1225,
        "length": 6,
        "p": [2, 5],
        "pinyin": "sdpsxp",
        "s": [0, 3],
        "x": [4]
    }, {
        "chinese": "扩乏嘎钎暮桅类孺返磷",
        "f": [1, 8],
        "g": [2],
        "id": 1226,
        "k": [0],
        "l": [6, 9],
        "length": 10,
        "m": [4],
        "pinyin": "kfgqmwlrfl",
        "q": [3],
        "r": [7],
        "w": [5]
    }, {
        "a": [7],
        "chinese": "甩庸拖汕暑埔疹胺",
        "id": 1227,
        "length": 8,
        "p": [5],
        "pinyin": "sytsspza",
        "s": [0, 3, 4],
        "t": [2],
        "y": [1],
        "z": [6]
    }, {
        "b": [7],
        "chinese": "舜锭抒验跟臀弘佰螟",
        "d": [1],
        "g": [4],
        "h": [6],
        "id": 1228,
        "length": 9,
        "m": [8],
        "pinyin": "sdsygthbm",
        "s": [0, 2],
        "t": [5],
        "y": [3]
    }, {
        "c": [9],
        "chinese": "俐蜡震届雨鸡服吉泊常",
        "f": [6],
        "id": 1229,
        "j": [3, 5, 7],
        "l": [0, 1],
        "length": 10,
        "p": [8],
        "pinyin": "llzjyjfjpc",
        "y": [4],
        "z": [2]
    }, {
        "chinese": "规华眠徘废光拐咐",
        "f": [4, 7],
        "g": [0, 5, 6],
        "h": [1],
        "id": 1230,
        "length": 8,
        "m": [2],
        "p": [3],
        "pinyin": "ghmpfggf"
    }, {
        "chinese": "怎稻捐闽君狞",
        "d": [1],
        "id": 1231,
        "j": [2, 4],
        "length": 6,
        "m": [3],
        "n": [5],
        "pinyin": "zdjmjn",
        "z": [0]
    }, {
        "chinese": "静褪如途滞泅泊",
        "id": 1232,
        "j": [0],
        "length": 7,
        "p": [6],
        "pinyin": "jtrtzqp",
        "q": [5],
        "r": [2],
        "t": [1, 3],
        "z": [4]
    }, {
        "c": [4, 7],
        "chinese": "掇婪假杭昌论弹醇秧",
        "d": [0, 6],
        "h": [3],
        "id": 1233,
        "j": [2],
        "l": [1, 5],
        "length": 9,
        "pinyin": "dljhcldcy",
        "y": [8]
    }, {
        "b": [3],
        "c": [0],
        "chinese": "刺酣剪惫糜对",
        "d": [5],
        "h": [1],
        "id": 1234,
        "j": [2],
        "length": 6,
        "m": [4],
        "pinyin": "chjbmd"
    }, {
        "chinese": "靳维形渣晰衅姨萨韵断黄",
        "d": [9],
        "h": [10],
        "id": 1235,
        "j": [0],
        "length": 11,
        "pinyin": "jwxzxxysydh",
        "s": [7],
        "w": [1],
        "x": [2, 4, 5],
        "y": [6, 8],
        "z": [3]
    }, {
        "b": [6],
        "chinese": "州张念浙体莫谤殊睁急尸",
        "id": 1236,
        "j": [9],
        "length": 11,
        "m": [5],
        "n": [2],
        "pinyin": "zznztmbszjs",
        "s": [7, 10],
        "t": [4],
        "z": [0, 1, 3, 8]
    }, {
        "b": [1],
        "chinese": "浸布塔赌舅吓惠",
        "d": [3],
        "h": [6],
        "id": 1237,
        "j": [0, 4],
        "length": 7,
        "pinyin": "jbtdjxh",
        "t": [2],
        "x": [5]
    }, {
        "b": [4],
        "c": [0],
        "chinese": "次友佃霓别乃描臃蛙砖桐",
        "d": [2],
        "id": 1238,
        "length": 11,
        "m": [6],
        "n": [3, 5],
        "pinyin": "cydnbnmywzt",
        "t": [10],
        "w": [8],
        "y": [1, 7],
        "z": [9]
    }, {
        "chinese": "钓费汪浦钠宰巳核丝各",
        "d": [0],
        "f": [1],
        "g": [9],
        "h": [7],
        "id": 1239,
        "length": 10,
        "n": [4],
        "p": [3],
        "pinyin": "dfwpnzshsg",
        "s": [6, 8],
        "w": [2],
        "z": [5]
    }, {
        "b": [2],
        "c": [0, 1, 3],
        "chinese": "财厂别寸总歼适",
        "id": 1240,
        "j": [5],
        "length": 7,
        "pinyin": "ccbczjs",
        "s": [6],
        "z": [4]
    }, {
        "c": [6, 7, 8],
        "chinese": "风慌典好厘甜摧次采",
        "d": [2],
        "f": [0],
        "h": [1, 3],
        "id": 1241,
        "l": [4],
        "length": 9,
        "pinyin": "fhdhltccc",
        "t": [5]
    }, {
        "c": [4],
        "chinese": "丁仅会猛铲齐",
        "d": [0],
        "h": [2],
        "id": 1242,
        "j": [1],
        "length": 6,
        "m": [3],
        "pinyin": "djhmcq",
        "q": [5]
    }, {
        "chinese": "倪左羞匈",
        "id": 1243,
        "length": 4,
        "n": [0],
        "pinyin": "nzxx",
        "x": [2, 3],
        "z": [1]
    }, {
        "c": [2],
        "chinese": "氯课揣捡拷倪闷",
        "id": 1244,
        "j": [3],
        "k": [1, 4],
        "l": [0],
        "length": 7,
        "m": [6],
        "n": [5],
        "pinyin": "lkcjknm"
    }, {
        "chinese": "豫奄胸链苔",
        "id": 1245,
        "l": [3],
        "length": 5,
        "pinyin": "yyxlt",
        "t": [4],
        "x": [2],
        "y": [0, 1]
    }, {
        "chinese": "附胚篓窍屿绚卢坷锦潜",
        "f": [0],
        "id": 1246,
        "j": [8],
        "k": [7],
        "l": [2, 6],
        "length": 10,
        "p": [1],
        "pinyin": "fplqyxlkjq",
        "q": [3, 9],
        "x": [5],
        "y": [4]
    }, {
        "b": [9],
        "c": [5],
        "chinese": "雄张靖袜愤斥间兜撵标栽",
        "d": [7],
        "f": [4],
        "id": 1247,
        "j": [2, 6],
        "length": 11,
        "n": [8],
        "pinyin": "xzjwfcjdnbz",
        "w": [3],
        "x": [0],
        "z": [1, 10]
    }, {
        "c": [3],
        "chinese": "稽花糯承设智啼奢",
        "h": [1],
        "id": 1248,
        "j": [0],
        "length": 8,
        "n": [2],
        "pinyin": "jhncszts",
        "s": [4, 7],
        "t": [6],
        "z": [5]
    }, {
        "c": [3],
        "chinese": "良服利惭力卡",
        "f": [1],
        "id": 1249,
        "k": [5],
        "l": [0, 2, 4],
        "length": 6,
        "pinyin": "lflclk"
    }, {
        "c": [5],
        "chinese": "护刨领夷苦斥札探烂耘劳",
        "h": [0],
        "id": 1250,
        "k": [4],
        "l": [2, 8, 10],
        "length": 11,
        "p": [1],
        "pinyin": "hplykcztlyl",
        "t": [7],
        "y": [3, 9],
        "z": [6]
    }, {
        "b": [4],
        "chinese": "悄忍嚎自笔贸垛黄泞劝",
        "d": [6],
        "h": [2, 7],
        "id": 1251,
        "length": 10,
        "m": [5],
        "n": [8],
        "pinyin": "qrhzbmdhnq",
        "q": [0, 9],
        "r": [1],
        "z": [3]
    }, {
        "b": [0],
        "chinese": "舶倦汇壤盾共茂俄牟",
        "d": [4],
        "e": [7],
        "g": [5],
        "h": [2],
        "id": 1252,
        "j": [1],
        "length": 9,
        "m": [6, 8],
        "pinyin": "bjhrdgmem",
        "r": [3]
    }, {
        "chinese": "渝棘蝎盔痔徘碉",
        "d": [6],
        "id": 1253,
        "j": [1],
        "k": [3],
        "length": 7,
        "p": [5],
        "pinyin": "yjxkzpd",
        "x": [2],
        "y": [0],
        "z": [4]
    }, {
        "c": [0],
        "chinese": "存亢懂显",
        "d": [2],
        "id": 1254,
        "k": [1],
        "length": 4,
        "pinyin": "ckdx",
        "x": [3]
    }, {
        "b": [2, 6],
        "chinese": "弹肃颁搜瓶遥贬冶冠发",
        "d": [0],
        "f": [9],
        "g": [8],
        "id": 1255,
        "length": 10,
        "p": [4],
        "pinyin": "dsbspybygf",
        "s": [1, 3],
        "y": [5, 7]
    }, {
        "a": [7],
        "chinese": "嘿契炬诸痉儡寅懊",
        "h": [0],
        "id": 1256,
        "j": [2, 4],
        "l": [5],
        "length": 8,
        "pinyin": "hqjzjlya",
        "q": [1],
        "y": [6],
        "z": [3]
    }, {
        "a": [7],
        "chinese": "丰设知砧巡铅扼傲漏柱",
        "e": [6],
        "f": [0],
        "id": 1257,
        "l": [8],
        "length": 10,
        "pinyin": "fszzxqealz",
        "q": [5],
        "s": [1],
        "x": [4],
        "z": [2, 3, 9]
    }, {
        "c": [6],
        "chinese": "淮恢府揽销桨耻龋",
        "f": [2],
        "h": [0, 1],
        "id": 1258,
        "j": [5],
        "l": [3],
        "length": 8,
        "pinyin": "hhflxjcq",
        "q": [7],
        "x": [4]
    }, {
        "chinese": "骂抓焉往",
        "id": 1259,
        "length": 4,
        "m": [0],
        "pinyin": "mzyw",
        "w": [3],
        "y": [2],
        "z": [1]
    }, {
        "c": [6],
        "chinese": "熏噬誉舆拂墒惭",
        "f": [4],
        "id": 1260,
        "length": 7,
        "pinyin": "xsyyfsc",
        "s": [1, 5],
        "x": [0],
        "y": [2, 3]
    }, {
        "chinese": "趋几刑凶棚涌馈戎",
        "id": 1261,
        "j": [1],
        "k": [6],
        "length": 8,
        "p": [4],
        "pinyin": "qjxxpykr",
        "q": [0],
        "r": [7],
        "x": [2, 3],
        "y": [5]
    }, {
        "a": [8],
        "chinese": "赛唾帅酶及妖左伊癌扼诲",
        "e": [9],
        "h": [10],
        "id": 1262,
        "j": [4],
        "length": 11,
        "m": [3],
        "pinyin": "stsmjyzyaeh",
        "s": [0, 2],
        "t": [1],
        "y": [5, 7],
        "z": [6]
    }, {
        "a": [10],
        "b": [6],
        "chinese": "忙签慑攻柿柬蓖钓栈挽癌",
        "d": [7],
        "g": [3],
        "id": 1263,
        "j": [5],
        "length": 11,
        "m": [0],
        "pinyin": "mqsgsjbdzwa",
        "q": [1],
        "s": [2, 4],
        "w": [9],
        "z": [8]
    }, {
        "b": [2],
        "chinese": "氧镀捌股顿剃",
        "d": [1, 4],
        "g": [3],
        "id": 1264,
        "length": 6,
        "pinyin": "ydbgdt",
        "t": [5],
        "y": [0]
    }, {
        "chinese": "枣那轿沿先疗惠",
        "h": [6],
        "id": 1265,
        "j": [2],
        "l": [5],
        "length": 7,
        "n": [1],
        "pinyin": "znjyxlh",
        "x": [4],
        "y": [3],
        "z": [0]
    }, {
        "chinese": "怪妓宁桩",
        "g": [0],
        "id": 1266,
        "j": [1],
        "length": 4,
        "n": [2],
        "pinyin": "gjnz",
        "z": [3]
    }, {
        "b": [4],
        "c": [3],
        "chinese": "蜗宙冬菜柄塔咳娟",
        "d": [2],
        "h": [6],
        "id": 1267,
        "j": [7],
        "length": 8,
        "pinyin": "wzdcbthj",
        "t": [5],
        "w": [0],
        "z": [1]
    }, {
        "chinese": "核焊雅和壕组反默晰",
        "f": [6],
        "h": [0, 1, 3, 4],
        "id": 1268,
        "length": 9,
        "m": [7],
        "pinyin": "hhyhhzfmx",
        "x": [8],
        "y": [2],
        "z": [5]
    }, {
        "chinese": "锨挝苦娜跺闰问",
        "d": [4],
        "id": 1269,
        "k": [2],
        "length": 7,
        "n": [3],
        "pinyin": "xwkndrw",
        "r": [5],
        "w": [1, 6],
        "x": [0]
    }, {
        "c": [0],
        "chinese": "睬殖晴榆晒绥",
        "id": 1270,
        "length": 6,
        "pinyin": "czqyss",
        "q": [2],
        "s": [4, 5],
        "y": [3],
        "z": [1]
    }, {
        "b": [4],
        "chinese": "骑慢欠剁病",
        "d": [3],
        "id": 1271,
        "length": 5,
        "m": [1],
        "pinyin": "qmqdb",
        "q": [0, 2]
    }, {
        "c": [4, 7],
        "chinese": "坐逾基竣楚赦冶刺规碘吻",
        "d": [9],
        "g": [8],
        "id": 1272,
        "j": [2, 3],
        "length": 11,
        "pinyin": "zyjjcsycgdw",
        "s": [5],
        "w": [10],
        "y": [1, 6],
        "z": [0]
    }, {
        "b": [3, 5],
        "c": [1],
        "chinese": "葛炽剐堡读边排惹",
        "d": [4],
        "g": [0, 2],
        "id": 1273,
        "length": 8,
        "p": [6],
        "pinyin": "gcgbdbpr",
        "r": [7]
    }, {
        "c": [1],
        "chinese": "妓锤局燎缉翌胃姚",
        "id": 1274,
        "j": [0, 2, 4],
        "l": [3],
        "length": 8,
        "pinyin": "jcjljywy",
        "w": [6],
        "y": [5, 7]
    }, {
        "chinese": "呀强源抗急婶黎午长骂",
        "id": 1275,
        "j": [4],
        "k": [3],
        "l": [6],
        "length": 10,
        "m": [9],
        "pinyin": "yqykjslwzm",
        "q": [1],
        "s": [5],
        "w": [7],
        "y": [0, 2],
        "z": [8]
    }, {
        "b": [3],
        "chinese": "热袁神北",
        "id": 1276,
        "length": 4,
        "pinyin": "rysb",
        "r": [0],
        "s": [2],
        "y": [1]
    }, {
        "b": [1],
        "c": [4],
        "chinese": "脸贝谍愈冲颧骗",
        "d": [2],
        "id": 1277,
        "l": [0],
        "length": 7,
        "p": [6],
        "pinyin": "lbdycqp",
        "q": [5],
        "y": [3]
    }, {
        "c": [5],
        "chinese": "游匠蒙缩展凑蹬霹",
        "d": [6],
        "id": 1278,
        "j": [1],
        "length": 8,
        "m": [2],
        "p": [7],
        "pinyin": "yjmszcdp",
        "s": [3],
        "y": [0],
        "z": [4]
    }, {
        "a": [7],
        "b": [5],
        "chinese": "感腾狰覆拾豹煞昂",
        "f": [3],
        "g": [0],
        "id": 1279,
        "length": 8,
        "pinyin": "gtzfsbsa",
        "s": [4, 6],
        "t": [1],
        "z": [2]
    }, {
        "c": [2],
        "chinese": "饲碘齿探手峙辙恿允睁绪",
        "d": [1],
        "id": 1280,
        "length": 11,
        "pinyin": "sdctszzyyzx",
        "s": [0, 4],
        "t": [3],
        "x": [10],
        "y": [7, 8],
        "z": [5, 6, 9]
    }, {
        "b": [0],
        "chinese": "爸俏坚确留曲低",
        "d": [6],
        "id": 1281,
        "j": [2],
        "l": [4],
        "length": 7,
        "pinyin": "bqjqlqd",
        "q": [1, 3, 5]
    }, {
        "c": [4],
        "chinese": "麻哭疏俏忱炬谎",
        "h": [6],
        "id": 1282,
        "j": [5],
        "k": [1],
        "length": 7,
        "m": [0],
        "pinyin": "mksqcjh",
        "q": [3],
        "s": [2]
    }, {
        "b": [4],
        "c": [5],
        "chinese": "啸尿崎瘸壁撤长走颜",
        "id": 1283,
        "length": 9,
        "n": [1],
        "pinyin": "xnqqbczzy",
        "q": [2, 3],
        "x": [0],
        "y": [8],
        "z": [6, 7]
    }, {
        "c": [1],
        "chinese": "杠窜邯女敦减",
        "d": [4],
        "g": [0],
        "h": [2],
        "id": 1284,
        "j": [5],
        "length": 6,
        "n": [3],
        "pinyin": "gchndj"
    }, {
        "c": [1],
        "chinese": "育蔡党耪",
        "d": [2],
        "id": 1285,
        "length": 4,
        "p": [3],
        "pinyin": "ycdp",
        "y": [0]
    }, {
        "chinese": "午拟粮盟坦马纽肢芥",
        "id": 1286,
        "j": [8],
        "l": [2],
        "length": 9,
        "m": [3, 5],
        "n": [1, 6],
        "pinyin": "wnlmtmnzj",
        "t": [4],
        "w": [0],
        "z": [7]
    }, {
        "b": [4],
        "chinese": "巫琅缴邑辩雁冬祁摇",
        "d": [6],
        "id": 1287,
        "j": [2],
        "l": [1],
        "length": 9,
        "pinyin": "wljybydqy",
        "q": [7],
        "w": [0],
        "y": [3, 5, 8]
    }, {
        "c": [7],
        "chinese": "纶肩他皆寐萍旁畜及乐褪",
        "id": 1288,
        "j": [1, 3, 8],
        "l": [0, 9],
        "length": 11,
        "m": [4],
        "p": [5, 6],
        "pinyin": "ljtjmppcjlt",
        "t": [2, 10]
    }, {
        "b": [7],
        "chinese": "晶居助淫栅光垒敝掂妆",
        "d": [8],
        "g": [5],
        "id": 1289,
        "j": [0, 1],
        "l": [6],
        "length": 10,
        "pinyin": "jjzyzglbdz",
        "y": [3],
        "z": [2, 4, 9]
    }, {
        "chinese": "稻怨藕培唤裔锦畏芯绕蒸",
        "d": [0],
        "h": [4],
        "id": 1290,
        "j": [6],
        "length": 11,
        "o": [2],
        "p": [3],
        "pinyin": "dyophyjwxrz",
        "r": [9],
        "w": [7],
        "x": [8],
        "y": [1, 5],
        "z": [10]
    }, {
        "c": [6],
        "chinese": "疾植繁立甜犯纯",
        "f": [2, 5],
        "id": 1291,
        "j": [0],
        "l": [3],
        "length": 7,
        "pinyin": "jzfltfc",
        "t": [4],
        "z": [1]
    }, {
        "c": [0],
        "chinese": "唇苦枫斜桌东粮蘸酥霉纬",
        "d": [5],
        "f": [2],
        "id": 1292,
        "k": [1],
        "l": [6],
        "length": 11,
        "m": [9],
        "pinyin": "ckfxzdlzsmw",
        "s": [8],
        "w": [10],
        "x": [3],
        "z": [4, 7]
    }, {
        "chinese": "嫡磕饯娶著羔配能钉墅",
        "d": [0, 8],
        "g": [5],
        "id": 1293,
        "j": [2],
        "k": [1],
        "length": 10,
        "n": [7],
        "p": [6],
        "pinyin": "dkjqzgpnds",
        "q": [3],
        "s": [9],
        "z": [4]
    }, {
        "b": [4],
        "c": [0],
        "chinese": "斥紫侥及甭乙墒竞",
        "id": 1294,
        "j": [2, 3, 7],
        "length": 8,
        "pinyin": "czjjbysj",
        "s": [6],
        "y": [5],
        "z": [1]
    }, {
        "c": [6, 9],
        "chinese": "诽韦毋揩圣符幢呜饵厕据",
        "e": [8],
        "f": [0, 5],
        "id": 1295,
        "j": [10],
        "k": [3],
        "length": 11,
        "pinyin": "fwwksfcwecj",
        "s": [4],
        "w": [1, 2, 7]
    }, {
        "chinese": "涉攘请皆胳曝挖",
        "g": [4],
        "id": 1296,
        "j": [3],
        "length": 7,
        "p": [5],
        "pinyin": "srqjgpw",
        "q": [2],
        "r": [1],
        "s": [0],
        "w": [6]
    }, {
        "b": [4],
        "c": [1],
        "chinese": "弃寸裂腮办闹停动气",
        "d": [7],
        "id": 1297,
        "l": [2],
        "length": 9,
        "n": [5],
        "pinyin": "qclsbntdq",
        "q": [0, 8],
        "s": [3],
        "t": [6]
    }, {
        "b": [1],
        "chinese": "桐彪绚来阉闽划",
        "h": [6],
        "id": 1298,
        "l": [3],
        "length": 7,
        "m": [5],
        "pinyin": "tbxlymh",
        "t": [0],
        "x": [2],
        "y": [4]
    }, {
        "c": [8],
        "chinese": "坍鸣浓戌篙丢紧聊矗顽鳞",
        "d": [5],
        "g": [4],
        "id": 1299,
        "j": [6],
        "l": [7, 10],
        "length": 11,
        "m": [1],
        "n": [2],
        "pinyin": "tmnxgdjlcwl",
        "t": [0],
        "w": [9],
        "x": [3]
    }, {
        "chinese": "佬谢血擎反脯蚤域",
        "f": [4],
        "id": 1300,
        "l": [0],
        "length": 8,
        "p": [5],
        "pinyin": "lxxqfpzy",
        "q": [3],
        "x": [1, 2],
        "y": [7],
        "z": [6]
    }, {
        "b": [6],
        "c": [1],
        "chinese": "朗幢挪誊驻书菠夹类",
        "id": 1301,
        "j": [7],
        "l": [0, 8],
        "length": 9,
        "n": [2],
        "pinyin": "lcntzsbjl",
        "s": [5],
        "t": [3],
        "z": [4]
    }, {
        "chinese": "注徒炬颈购庄肌",
        "g": [4],
        "id": 1302,
        "j": [2, 3, 6],
        "length": 7,
        "pinyin": "ztjjgzj",
        "t": [1],
        "z": [0, 5]
    }, {
        "chinese": "斯彭罪肆绽匀鲁欢缅司",
        "h": [7],
        "id": 1303,
        "l": [6],
        "length": 10,
        "m": [8],
        "p": [1],
        "pinyin": "spzszylhms",
        "s": [0, 3, 9],
        "y": [5],
        "z": [2, 4]
    }, {
        "b": [4, 5],
        "chinese": "痪纠现脸宾保峨杀绩症",
        "e": [6],
        "h": [0],
        "id": 1304,
        "j": [1, 8],
        "l": [3],
        "length": 10,
        "pinyin": "hjxlbbesjz",
        "s": [7],
        "x": [2],
        "z": [9]
    }, {
        "chinese": "钳伪嗽羌",
        "id": 1305,
        "length": 4,
        "pinyin": "qwsq",
        "q": [0, 3],
        "s": [2],
        "w": [1]
    }, {
        "b": [4],
        "c": [0, 7],
        "chinese": "颤笼渡囚避砾儒惩珠",
        "d": [2],
        "id": 1306,
        "l": [1, 5],
        "length": 9,
        "pinyin": "cldqblrcz",
        "q": [3],
        "r": [6],
        "z": [8]
    }, {
        "chinese": "譬胎锋行吐缀副防滑混",
        "f": [2, 6, 7],
        "h": [8, 9],
        "id": 1307,
        "length": 10,
        "p": [0],
        "pinyin": "ptfxtzffhh",
        "t": [1, 4],
        "x": [3],
        "z": [5]
    }, {
        "chinese": "份叫灼札",
        "f": [0],
        "id": 1308,
        "j": [1],
        "length": 4,
        "pinyin": "fjzz",
        "z": [2, 3]
    }, {
        "b": [3],
        "chinese": "蚊躲韧病荡脂歹衅桓漾幌",
        "d": [1, 4, 6],
        "h": [8, 10],
        "id": 1309,
        "length": 11,
        "pinyin": "wdrbdzdxhyh",
        "r": [2],
        "w": [0],
        "x": [7],
        "y": [9],
        "z": [5]
    }, {
        "c": [0, 3],
        "chinese": "参让赶蔡瓶航",
        "g": [2],
        "h": [5],
        "id": 1310,
        "length": 6,
        "p": [4],
        "pinyin": "crgcph",
        "r": [1]
    }, {
        "chinese": "晾坞钧郝期敲",
        "h": [3],
        "id": 1311,
        "j": [2],
        "l": [0],
        "length": 6,
        "pinyin": "lwjhqq",
        "q": [4, 5],
        "w": [1]
    }, {
        "chinese": "蟹芬淑枉书",
        "f": [1],
        "id": 1312,
        "length": 5,
        "pinyin": "xfsws",
        "s": [2, 4],
        "w": [3],
        "x": [0]
    }, {
        "chinese": "王铬婿它古长愈",
        "g": [1, 4],
        "id": 1313,
        "length": 7,
        "pinyin": "wgxtgzy",
        "t": [3],
        "w": [0],
        "x": [2],
        "y": [6],
        "z": [5]
    }, {
        "a": [3],
        "c": [0, 8],
        "chinese": "脆踪析懊火珠棉硕椿擞轮",
        "h": [4],
        "id": 1314,
        "l": [10],
        "length": 11,
        "m": [6],
        "pinyin": "czxahzmscsl",
        "s": [7, 9],
        "x": [2],
        "z": [1, 5]
    }, {
        "b": [4],
        "chinese": "番消抡隶病脾各站",
        "f": [0],
        "g": [6],
        "id": 1315,
        "l": [2, 3],
        "length": 8,
        "p": [5],
        "pinyin": "fxllbpgz",
        "x": [1],
        "z": [7]
    }, {
        "c": [4],
        "chinese": "京竭勋啪瞅友睹",
        "d": [6],
        "id": 1316,
        "j": [0, 1],
        "length": 7,
        "p": [3],
        "pinyin": "jjxpcyd",
        "x": [2],
        "y": [5]
    }, {
        "b": [3],
        "c": [0],
        "chinese": "厨馈绽笆灸竣镜",
        "id": 1317,
        "j": [4, 5, 6],
        "k": [1],
        "length": 7,
        "pinyin": "ckzbjjj",
        "z": [2]
    }, {
        "chinese": "阀铱在赚",
        "f": [0],
        "id": 1318,
        "length": 4,
        "pinyin": "fyzz",
        "y": [1],
        "z": [2, 3]
    }, {
        "c": [0, 1],
        "chinese": "锄层掷凭谁很",
        "h": [5],
        "id": 1319,
        "length": 6,
        "p": [3],
        "pinyin": "cczpsh",
        "s": [4],
        "z": [2]
    }, {
        "c": [0],
        "chinese": "澄岩驶愉泅等坟樟忘",
        "d": [5],
        "f": [6],
        "id": 1320,
        "length": 9,
        "pinyin": "cysyqdfzw",
        "q": [4],
        "s": [2],
        "w": [8],
        "y": [1, 3],
        "z": [7]
    }, {
        "chinese": "豁帅片卸",
        "h": [0],
        "id": 1321,
        "length": 4,
        "p": [2],
        "pinyin": "hspx",
        "s": [1],
        "x": [3]
    }, {
        "chinese": "约旭江终瓤幕若朴捣",
        "d": [8],
        "id": 1322,
        "j": [2],
        "length": 9,
        "m": [5],
        "p": [7],
        "pinyin": "yxjzrmrpd",
        "r": [4, 6],
        "x": [1],
        "y": [0],
        "z": [3]
    }, {
        "chinese": "学盐购皖",
        "g": [2],
        "id": 1323,
        "length": 4,
        "pinyin": "xygw",
        "w": [3],
        "x": [0],
        "y": [1]
    }, {
        "c": [0, 7, 8],
        "chinese": "柴妖纠缮豪幸祸承程九凋",
        "d": [10],
        "h": [4, 6],
        "id": 1324,
        "j": [2, 9],
        "length": 11,
        "pinyin": "cyjshxhccjd",
        "s": [3],
        "x": [5],
        "y": [1]
    }, {
        "b": [1],
        "chinese": "郧毖疚执",
        "id": 1325,
        "j": [2],
        "length": 4,
        "pinyin": "ybjz",
        "y": [0],
        "z": [3]
    }, {
        "chinese": "务缄玖维跪雪淄",
        "g": [4],
        "id": 1326,
        "j": [1, 2],
        "length": 7,
        "pinyin": "wjjwgxz",
        "w": [0, 3],
        "x": [5],
        "z": [6]
    }, {
        "chinese": "拥蚊坞龋",
        "id": 1327,
        "length": 4,
        "pinyin": "ywwq",
        "q": [3],
        "w": [1, 2],
        "y": [0]
    }, {
        "b": [5],
        "c": [2, 4],
        "chinese": "蝇怜池揭草剥猾皱库狱",
        "h": [6],
        "id": 1328,
        "j": [3],
        "k": [8],
        "l": [1],
        "length": 10,
        "pinyin": "ylcjcbhzky",
        "y": [0, 9],
        "z": [7]
    }, {
        "chinese": "最识辗匪钝磺逾",
        "d": [4],
        "f": [3],
        "h": [5],
        "id": 1329,
        "length": 7,
        "n": [2],
        "pinyin": "zsnfdhy",
        "s": [1],
        "y": [6],
        "z": [0]
    }, {
        "b": [1, 3],
        "chinese": "应扮煎菠仁",
        "id": 1330,
        "j": [2],
        "length": 5,
        "pinyin": "ybjbr",
        "r": [4],
        "y": [0]
    }, {
        "a": [5],
        "b": [10],
        "c": [3, 7],
        "chinese": "去何熄测暖盎淫撤猾锁避",
        "h": [1, 8],
        "id": 1331,
        "length": 11,
        "n": [4],
        "pinyin": "qhxcnaychsb",
        "q": [0],
        "s": [9],
        "x": [2],
        "y": [6]
    }, {
        "chinese": "侦傀嘘肥侗岁倾炭",
        "d": [4],
        "f": [3],
        "g": [1],
        "id": 1332,
        "length": 8,
        "pinyin": "zgxfdsqt",
        "q": [6],
        "s": [5],
        "t": [7],
        "x": [2],
        "z": [0]
    }, {
        "b": [4],
        "chinese": "裸扫炎灾贬皱袒跑筑膝乔",
        "id": 1333,
        "l": [0],
        "length": 11,
        "p": [7],
        "pinyin": "lsyzbztpzxq",
        "q": [10],
        "s": [1],
        "t": [6],
        "x": [9],
        "y": [2],
        "z": [3, 5, 8]
    }, {
        "b": [3],
        "chinese": "滩冕亩碧",
        "id": 1334,
        "length": 4,
        "m": [1, 2],
        "pinyin": "tmmb",
        "t": [0]
    }, {
        "c": [7],
        "chinese": "煎洪要索烟埋曰乘",
        "h": [1],
        "id": 1335,
        "j": [0],
        "length": 8,
        "m": [5],
        "pinyin": "jhysymyc",
        "s": [3],
        "y": [2, 4, 6]
    }, {
        "b": [7],
        "c": [1, 6],
        "chinese": "浇创遂涵专愈柴冰霜牧斤",
        "h": [3],
        "id": 1336,
        "j": [0, 10],
        "length": 11,
        "m": [9],
        "pinyin": "jcshzycbsmj",
        "s": [2, 8],
        "y": [5],
        "z": [4]
    }, {
        "b": [6],
        "chinese": "囤慢棘束琴伶拨尧",
        "d": [0],
        "id": 1337,
        "j": [2],
        "l": [5],
        "length": 8,
        "m": [1],
        "pinyin": "dmjsqlby",
        "q": [4],
        "s": [3],
        "y": [7]
    }, {
        "chinese": "肾篱朵淤",
        "d": [2],
        "id": 1338,
        "l": [1],
        "length": 4,
        "pinyin": "sldy",
        "s": [0],
        "y": [3]
    }, {
        "a": [5],
        "c": [1],
        "chinese": "贮滁肄锋尿蔼确镰",
        "f": [3],
        "id": 1339,
        "l": [7],
        "length": 8,
        "n": [4],
        "pinyin": "zcyfnaql",
        "q": [6],
        "y": [2],
        "z": [0]
    }, {
        "chinese": "饵极筋屿耗辱佛门隋",
        "e": [0],
        "f": [6],
        "h": [4],
        "id": 1340,
        "j": [1, 2],
        "length": 9,
        "m": [7],
        "pinyin": "ejjyhrfms",
        "r": [5],
        "s": [8],
        "y": [3]
    }, {
        "c": [2],
        "chinese": "坷燥蠢唐淖",
        "id": 1341,
        "k": [0],
        "length": 5,
        "n": [4],
        "pinyin": "kzctn",
        "t": [3],
        "z": [1]
    }, {
        "chinese": "碗室镶猎腋三粘",
        "id": 1342,
        "l": [3],
        "length": 7,
        "pinyin": "wsxlysz",
        "s": [1, 5],
        "w": [0],
        "x": [2],
        "y": [4],
        "z": [6]
    }, {
        "chinese": "洼拂朗屿顶饺结局",
        "d": [4],
        "f": [1],
        "id": 1343,
        "j": [5, 6, 7],
        "l": [2],
        "length": 8,
        "pinyin": "wflydjjj",
        "w": [0],
        "y": [3]
    }, {
        "a": [8],
        "b": [2],
        "chinese": "睫冶闭丘磷赎纳泼昂鉴击",
        "id": 1344,
        "j": [0, 9, 10],
        "l": [4],
        "length": 11,
        "n": [6],
        "p": [7],
        "pinyin": "jybqlsnpajj",
        "q": [3],
        "s": [5],
        "y": [1]
    }, {
        "chinese": "撰泡夺店疯",
        "d": [2, 3],
        "f": [4],
        "id": 1345,
        "length": 5,
        "p": [1],
        "pinyin": "zpddf",
        "z": [0]
    }, {
        "chinese": "驻还晴赡野扣暂豁削揉中",
        "h": [1, 7],
        "id": 1346,
        "k": [5],
        "length": 11,
        "pinyin": "zhqsykzhxrz",
        "q": [2],
        "r": [9],
        "s": [3],
        "x": [8],
        "y": [4],
        "z": [0, 6, 10]
    }, {
        "b": [0],
        "chinese": "痹腔泞湍凶",
        "id": 1347,
        "length": 5,
        "n": [2],
        "pinyin": "bqntx",
        "q": [1],
        "t": [3],
        "x": [4]
    }, {
        "chinese": "跨够撞禹抡斟胸哪筐檬陪",
        "g": [1],
        "id": 1348,
        "k": [0, 8],
        "l": [4],
        "length": 11,
        "m": [9],
        "n": [7],
        "p": [10],
        "pinyin": "kgzylzxnkmp",
        "x": [6],
        "y": [3],
        "z": [2, 5]
    }, {
        "chinese": "砾鸥艳抑低特复旬桃",
        "d": [4],
        "f": [6],
        "id": 1349,
        "l": [0],
        "length": 9,
        "o": [1],
        "pinyin": "loyydtfxt",
        "t": [5, 8],
        "x": [7],
        "y": [2, 3]
    }, {
        "c": [4],
        "chinese": "怕墨辅磺仇梦蓬掀智讽",
        "f": [2, 9],
        "h": [3],
        "id": 1350,
        "length": 10,
        "m": [1, 5],
        "p": [0, 6],
        "pinyin": "pmfhcmpxzf",
        "x": [7],
        "z": [8]
    }, {
        "c": [7],
        "chinese": "渔胸菏旱危舍宅磋伶",
        "h": [2, 3],
        "id": 1351,
        "l": [8],
        "length": 9,
        "pinyin": "yxhhwszcl",
        "s": [5],
        "w": [4],
        "x": [1],
        "y": [0],
        "z": [6]
    }, {
        "a": [2],
        "chinese": "伸逸哎善沫刘堪绚",
        "id": 1352,
        "k": [6],
        "l": [5],
        "length": 8,
        "m": [4],
        "pinyin": "syasmlkx",
        "s": [0, 3],
        "x": [7],
        "y": [1]
    }, {
        "c": [0],
        "chinese": "穿卷荧谎互搔",
        "h": [3, 4],
        "id": 1353,
        "j": [1],
        "length": 6,
        "pinyin": "cjyhhs",
        "s": [5],
        "y": [2]
    }, {
        "chinese": "开舞温静尸肉懦寞相棱",
        "id": 1354,
        "j": [3],
        "k": [0],
        "l": [9],
        "length": 10,
        "m": [7],
        "n": [6],
        "pinyin": "kwwjsrnmxl",
        "r": [5],
        "s": [4],
        "w": [1, 2],
        "x": [8]
    }, {
        "c": [4],
        "chinese": "芒粉枣砌茨枝沛摊示萌坷",
        "f": [1],
        "id": 1355,
        "k": [10],
        "length": 11,
        "m": [0, 9],
        "p": [6],
        "pinyin": "mfzqczptsmk",
        "q": [3],
        "s": [8],
        "t": [7],
        "z": [2, 5]
    }, {
        "chinese": "钥秩砧涛亥受譬睹莆",
        "d": [7],
        "h": [4],
        "id": 1356,
        "length": 9,
        "p": [6, 8],
        "pinyin": "yzzthspdp",
        "s": [5],
        "t": [3],
        "y": [0],
        "z": [1, 2]
    }, {
        "b": [2],
        "c": [9],
        "chinese": "遁述吧倚札昔去剪字椎甩",
        "d": [0],
        "id": 1357,
        "j": [7],
        "length": 11,
        "pinyin": "dsbyzxqjzcs",
        "q": [6],
        "s": [1, 10],
        "x": [5],
        "y": [3],
        "z": [4, 8]
    }, {
        "a": [2],
        "chinese": "眨活俺袒烽姻网问忧寝",
        "f": [4],
        "h": [1],
        "id": 1358,
        "length": 10,
        "pinyin": "zhatfywwyq",
        "q": [9],
        "t": [3],
        "w": [6, 7],
        "y": [5, 8],
        "z": [0]
    }, {
        "c": [2],
        "chinese": "分学残嗜",
        "f": [0],
        "id": 1359,
        "length": 4,
        "pinyin": "fxcs",
        "s": [3],
        "x": [1]
    }, {
        "b": [8],
        "chinese": "拖旧诌悟角副权坞斌",
        "f": [5],
        "id": 1360,
        "j": [1, 4],
        "length": 9,
        "pinyin": "tjzwjfqwb",
        "q": [6],
        "t": [0],
        "w": [3, 7],
        "z": [2]
    }, {
        "b": [0],
        "chinese": "捕陕环浙雨单",
        "d": [5],
        "h": [2],
        "id": 1361,
        "length": 6,
        "pinyin": "bshzyd",
        "s": [1],
        "y": [4],
        "z": [3]
    }, {
        "chinese": "忿篙顾挥辟",
        "f": [0],
        "g": [1, 2],
        "h": [3],
        "id": 1362,
        "length": 5,
        "p": [4],
        "pinyin": "fgghp"
    }, {
        "chinese": "啄闷倪嫡腕株襟",
        "d": [3],
        "id": 1363,
        "j": [6],
        "length": 7,
        "m": [1],
        "n": [2],
        "pinyin": "zmndwzj",
        "w": [4],
        "z": [0, 5]
    }, {
        "b": [6],
        "chinese": "涌乓油见薪晴贝",
        "id": 1364,
        "j": [3],
        "length": 7,
        "p": [1],
        "pinyin": "ypyjxqb",
        "q": [5],
        "x": [4],
        "y": [0, 2]
    }, {
        "chinese": "闲鞋掇足墓",
        "d": [2],
        "id": 1365,
        "length": 5,
        "m": [4],
        "pinyin": "xxdzm",
        "x": [0, 1],
        "z": [3]
    }, {
        "b": [3],
        "chinese": "条腿荤舶",
        "h": [2],
        "id": 1366,
        "length": 4,
        "pinyin": "tthb",
        "t": [0, 1]
    }, {
        "chinese": "围娟欠尼",
        "id": 1367,
        "j": [1],
        "length": 4,
        "n": [3],
        "pinyin": "wjqn",
        "q": [2],
        "w": [0]
    }, {
        "c": [3],
        "chinese": "翰殃淘崔翟诞砂混焚",
        "d": [4, 5],
        "f": [8],
        "h": [0, 7],
        "id": 1368,
        "length": 9,
        "pinyin": "hytcddshf",
        "s": [6],
        "t": [2],
        "y": [1]
    }, {
        "c": [1, 3],
        "chinese": "儒踩微词其妇懂冒憾",
        "d": [6],
        "f": [5],
        "h": [8],
        "id": 1369,
        "length": 9,
        "m": [7],
        "pinyin": "rcwcqfdmh",
        "q": [4],
        "r": [0],
        "w": [2]
    }, {
        "c": [2],
        "chinese": "婿纶凑桔昨番",
        "f": [5],
        "id": 1370,
        "j": [3],
        "l": [1],
        "length": 6,
        "pinyin": "xlcjzf",
        "x": [0],
        "z": [4]
    }, {
        "chinese": "侣杂哈险己庶呛棱蛮妆审",
        "h": [2],
        "id": 1371,
        "j": [4],
        "l": [0, 7],
        "length": 11,
        "m": [8],
        "pinyin": "lzhxjsqlmzs",
        "q": [6],
        "s": [5, 10],
        "x": [3],
        "z": [1, 9]
    }, {
        "b": [8],
        "c": [1],
        "chinese": "昼谗滦澡拉脐羞启笆冯",
        "f": [9],
        "id": 1372,
        "l": [2, 4],
        "length": 10,
        "pinyin": "zclzlqxqbf",
        "q": [5, 7],
        "x": [6],
        "z": [0, 3]
    }, {
        "b": [3],
        "chinese": "慰使撅丙若",
        "id": 1373,
        "j": [2],
        "length": 5,
        "pinyin": "wsjbr",
        "r": [4],
        "s": [1],
        "w": [0]
    }, {
        "c": [2],
        "chinese": "邪碎策赫赦",
        "h": [3],
        "id": 1374,
        "length": 5,
        "pinyin": "xschs",
        "s": [1, 4],
        "x": [0]
    }, {
        "chinese": "跟略确晋矾",
        "f": [4],
        "g": [0],
        "id": 1375,
        "j": [3],
        "l": [1],
        "length": 5,
        "pinyin": "glqjf",
        "q": [2]
    }, {
        "b": [0],
        "chinese": "杯脊忍哗晶渣卧",
        "h": [3],
        "id": 1376,
        "j": [1, 4],
        "length": 7,
        "pinyin": "bjrhjzw",
        "r": [2],
        "w": [6],
        "z": [5]
    }, {
        "b": [0, 8],
        "chinese": "鲍普借哉曰前账叛弊妄",
        "id": 1377,
        "j": [2],
        "length": 10,
        "p": [1, 7],
        "pinyin": "bpjzyqzpbw",
        "q": [5],
        "w": [9],
        "y": [4],
        "z": [3, 6]
    }, {
        "b": [4],
        "c": [3],
        "chinese": "冠祖门承梆嗓",
        "g": [0],
        "id": 1378,
        "length": 6,
        "m": [2],
        "pinyin": "gzmcbs",
        "s": [5],
        "z": [1]
    }, {
        "chinese": "寅牲镶筷挡翰朽抛",
        "d": [4],
        "h": [5],
        "id": 1379,
        "k": [3],
        "length": 8,
        "p": [7],
        "pinyin": "ysxkdhxp",
        "s": [1],
        "x": [2, 6],
        "y": [0]
    }, {
        "chinese": "裕琳荡伏惶开镭碱媳",
        "d": [2],
        "f": [3],
        "h": [4],
        "id": 1380,
        "j": [7],
        "k": [5],
        "l": [1, 6],
        "length": 9,
        "pinyin": "yldfhkljx",
        "x": [8],
        "y": [0]
    }, {
        "chinese": "契衡惮倔",
        "d": [2],
        "h": [1],
        "id": 1381,
        "j": [3],
        "length": 4,
        "pinyin": "qhdj",
        "q": [0]
    }, {
        "chinese": "烃彤募剐灭韭骆",
        "g": [3],
        "id": 1382,
        "j": [5],
        "l": [6],
        "length": 7,
        "m": [2, 4],
        "pinyin": "ttmgmjl",
        "t": [0, 1]
    }, {
        "b": [1, 5, 8],
        "c": [10],
        "chinese": "绒八站遇挞斑歼廖耙撕床",
        "id": 1383,
        "j": [6],
        "l": [7],
        "length": 11,
        "pinyin": "rbzytbjlbsc",
        "r": [0],
        "s": [9],
        "t": [4],
        "y": [3],
        "z": [2]
    }, {
        "c": [5, 6],
        "chinese": "家峻煞胶坎刺锤矢秆玲",
        "g": [8],
        "id": 1384,
        "j": [0, 1, 3],
        "k": [4],
        "l": [9],
        "length": 10,
        "pinyin": "jjsjkccsgl",
        "s": [2, 7]
    }, {
        "a": [2],
        "chinese": "撒浙岸辉享啪",
        "h": [3],
        "id": 1385,
        "length": 6,
        "p": [5],
        "pinyin": "szahxp",
        "s": [0],
        "x": [4],
        "z": [1]
    }, {
        "a": [8],
        "c": [1],
        "chinese": "提蝉抉派童猛乳清蔼宇镣",
        "id": 1386,
        "j": [2],
        "l": [10],
        "length": 11,
        "m": [5],
        "p": [3],
        "pinyin": "tcjptmrqayl",
        "q": [7],
        "r": [6],
        "t": [0, 4],
        "y": [9]
    }, {
        "chinese": "蹲生琳瘫绅互怪里锻篷射",
        "d": [0, 8],
        "g": [6],
        "h": [5],
        "id": 1387,
        "l": [2, 7],
        "length": 11,
        "p": [9],
        "pinyin": "dsltshgldps",
        "s": [1, 4, 10],
        "t": [3]
    }, {
        "chinese": "讥兹陆短",
        "d": [3],
        "id": 1388,
        "j": [0],
        "l": [2],
        "length": 4,
        "pinyin": "jzld",
        "z": [1]
    }, {
        "b": [3],
        "chinese": "内斟轩彼疗",
        "id": 1389,
        "l": [4],
        "length": 5,
        "n": [0],
        "pinyin": "nzxbl",
        "x": [2],
        "z": [1]
    }, {
        "chinese": "渭嘘郊柿谅慕硷唤遣",
        "h": [7],
        "id": 1390,
        "j": [2, 6],
        "l": [4],
        "length": 9,
        "m": [5],
        "pinyin": "wxjslmjhq",
        "q": [8],
        "s": [3],
        "w": [0],
        "x": [1]
    }, {
        "c": [3, 10],
        "chinese": "堆霖爪撑牢骸团埂导拇册",
        "d": [0, 8],
        "g": [7],
        "h": [5],
        "id": 1391,
        "l": [1, 4],
        "length": 11,
        "m": [9],
        "pinyin": "dlzclhtgdmc",
        "t": [6],
        "z": [2]
    }, {
        "b": [2, 4],
        "chinese": "枚无辈货菠壳钮",
        "h": [3],
        "id": 1392,
        "k": [5],
        "length": 7,
        "m": [0],
        "n": [6],
        "pinyin": "mwbhbkn",
        "w": [1]
    }, {
        "b": [1],
        "chinese": "法爸杜控麓袖",
        "d": [2],
        "f": [0],
        "id": 1393,
        "k": [3],
        "l": [4],
        "length": 6,
        "pinyin": "fbdklx",
        "x": [5]
    }, {
        "chinese": "锋亿漆佃升剂郭蔚酸牟",
        "d": [3],
        "f": [0],
        "g": [6],
        "id": 1394,
        "j": [5],
        "length": 10,
        "m": [9],
        "pinyin": "fyqdsjgwsm",
        "q": [2],
        "s": [4, 8],
        "w": [7],
        "y": [1]
    }, {
        "chinese": "匈寐碱洲扛",
        "id": 1395,
        "j": [2],
        "k": [4],
        "length": 5,
        "m": [1],
        "pinyin": "xmjzk",
        "x": [0],
        "z": [3]
    }, {
        "b": [1],
        "c": [5],
        "chinese": "榆版政况防串方泰墙罩偏",
        "f": [4, 6],
        "id": 1396,
        "k": [3],
        "length": 11,
        "p": [10],
        "pinyin": "ybzkfcftqzp",
        "q": [8],
        "t": [7],
        "y": [0],
        "z": [2, 9]
    }, {
        "b": [6],
        "c": [3],
        "chinese": "囊谅暑差睹翻捕喳",
        "d": [4],
        "f": [5],
        "id": 1397,
        "l": [1],
        "length": 8,
        "n": [0],
        "pinyin": "nlscdfbz",
        "s": [2],
        "z": [7]
    }, {
        "c": [5],
        "chinese": "烦掸骑仅帧层楷咆瞳耶",
        "d": [1],
        "f": [0],
        "id": 1398,
        "j": [3],
        "k": [6],
        "length": 10,
        "p": [7],
        "pinyin": "fdqjzckpty",
        "q": [2],
        "t": [8],
        "y": [9],
        "z": [4]
    }, {
        "c": [5],
        "chinese": "遇懒选贴型丑韭",
        "id": 1399,
        "j": [6],
        "l": [1],
        "length": 7,
        "pinyin": "ylxtxcj",
        "t": [3],
        "x": [2, 4],
        "y": [0]
    }, {
        "b": [3],
        "chinese": "拙薛谣傍澡韶",
        "id": 1400,
        "length": 6,
        "pinyin": "zxybzs",
        "s": [5],
        "x": [1],
        "y": [2],
        "z": [0, 4]
    }, {
        "b": [3, 8, 9],
        "c": [0],
        "chinese": "才尿故斌滥冷恰痒舶半",
        "g": [2],
        "id": 1401,
        "l": [4, 5],
        "length": 10,
        "n": [1],
        "pinyin": "cngbllqybb",
        "q": [6],
        "y": [7]
    }, {
        "b": [0, 2],
        "chinese": "表恩班殉煎壕弓琴廷",
        "e": [1],
        "g": [6],
        "h": [5],
        "id": 1402,
        "j": [4],
        "length": 9,
        "pinyin": "bebxjhgqt",
        "q": [7],
        "t": [8],
        "x": [3]
    }, {
        "b": [9],
        "chinese": "岭芬魁砍羹展砚颧借捕",
        "f": [1],
        "g": [4],
        "id": 1403,
        "j": [8],
        "k": [2, 3],
        "l": [0],
        "length": 10,
        "pinyin": "lfkkgzyqjb",
        "q": [7],
        "y": [6],
        "z": [5]
    }, {
        "c": [0],
        "chinese": "创额沂相炎",
        "e": [1],
        "id": 1404,
        "length": 5,
        "pinyin": "ceyxy",
        "x": [3],
        "y": [2, 4]
    }, {
        "chinese": "嵌孺蹲勿烷柱朔劣窖洼",
        "d": [2],
        "id": 1405,
        "j": [8],
        "l": [7],
        "length": 10,
        "pinyin": "qrdwwzsljw",
        "q": [0],
        "r": [1],
        "s": [6],
        "w": [3, 4, 9],
        "z": [5]
    }, {
        "chinese": "龄孟寻鸣胆糊惶",
        "d": [4],
        "h": [5, 6],
        "id": 1406,
        "l": [0],
        "length": 7,
        "m": [1, 3],
        "pinyin": "lmxmdhh",
        "x": [2]
    }, {
        "chinese": "妓雍危渣宽巧",
        "id": 1407,
        "j": [0],
        "k": [4],
        "length": 6,
        "pinyin": "jywzkq",
        "q": [5],
        "w": [2],
        "y": [1],
        "z": [3]
    }, {
        "b": [1],
        "chinese": "麓鲍滓仔妥思啪墓",
        "id": 1408,
        "l": [0],
        "length": 8,
        "m": [7],
        "p": [6],
        "pinyin": "lbzztspm",
        "s": [5],
        "t": [4],
        "z": [2, 3]
    }, {
        "c": [0, 1],
        "chinese": "篡秤泉愤椭瞬诡招巾",
        "f": [3],
        "g": [6],
        "id": 1409,
        "j": [8],
        "length": 9,
        "pinyin": "ccqftsgzj",
        "q": [2],
        "s": [5],
        "t": [4],
        "z": [7]
    }, {
        "b": [0, 1],
        "chinese": "柏背埔筏嗓妙熄丫",
        "f": [3],
        "id": 1410,
        "length": 8,
        "m": [5],
        "p": [2],
        "pinyin": "bbpfsmxy",
        "s": [4],
        "x": [6],
        "y": [7]
    }, {
        "chinese": "扑煮崭街襄会谩钻缚淀祈",
        "d": [9],
        "f": [8],
        "h": [5],
        "id": 1411,
        "j": [3],
        "length": 11,
        "m": [6],
        "p": [0],
        "pinyin": "pzzjxhmzfdq",
        "q": [10],
        "x": [4],
        "z": [1, 2, 7]
    }, {
        "b": [1, 2],
        "c": [0],
        "chinese": "城比饱来轩挠者慑",
        "id": 1412,
        "l": [3],
        "length": 8,
        "n": [5],
        "pinyin": "cbblxnzs",
        "s": [7],
        "x": [4],
        "z": [6]
    }, {
        "b": [8],
        "c": [0],
        "chinese": "参穷陋禄扩碉涟霓棒藕",
        "d": [5],
        "id": 1413,
        "k": [4],
        "l": [2, 3, 6],
        "length": 10,
        "n": [7],
        "o": [9],
        "pinyin": "cqllkdlnbo",
        "q": [1]
    }, {
        "chinese": "嘻阔悼珍疫峰捞",
        "d": [2],
        "f": [5],
        "id": 1414,
        "k": [1],
        "l": [6],
        "length": 7,
        "pinyin": "xkdzyfl",
        "x": [0],
        "y": [4],
        "z": [3]
    }, {
        "b": [3],
        "chinese": "清情茅布梅条镍越看黄",
        "h": [9],
        "id": 1415,
        "k": [8],
        "length": 10,
        "m": [2, 4],
        "n": [6],
        "pinyin": "qqmbmtnykh",
        "q": [0, 1],
        "t": [5],
        "y": [7]
    }, {
        "chinese": "绞弹凿砒疽",
        "d": [1],
        "id": 1416,
        "j": [0, 4],
        "length": 5,
        "p": [3],
        "pinyin": "jdzpj",
        "z": [2]
    }, {
        "b": [4],
        "chinese": "义摊琼电布院囤缅袍烷",
        "d": [3, 6],
        "id": 1417,
        "length": 10,
        "m": [7],
        "p": [8],
        "pinyin": "ytqdbydmpw",
        "q": [2],
        "t": [1],
        "w": [9],
        "y": [0, 5]
    }, {
        "chinese": "须于捂扫孙",
        "id": 1418,
        "length": 5,
        "pinyin": "xywss",
        "s": [3, 4],
        "w": [2],
        "x": [0],
        "y": [1]
    }, {
        "c": [2],
        "chinese": "辕曝忱硝冉",
        "id": 1419,
        "length": 5,
        "p": [1],
        "pinyin": "ypcxr",
        "r": [4],
        "x": [3],
        "y": [0]
    }, {
        "c": [3],
        "chinese": "蛙姻舌承菲郁",
        "f": [4],
        "id": 1420,
        "length": 6,
        "pinyin": "wyscfy",
        "s": [2],
        "w": [0],
        "y": [1, 5]
    }, {
        "b": [2],
        "chinese": "晰禽摈瓦吩竹",
        "f": [4],
        "id": 1421,
        "length": 6,
        "pinyin": "xqbwfz",
        "q": [1],
        "w": [3],
        "x": [0],
        "z": [5]
    }, {
        "chinese": "侩与省擂支区",
        "id": 1422,
        "k": [0],
        "l": [3],
        "length": 6,
        "pinyin": "kyslzq",
        "q": [5],
        "s": [2],
        "y": [1],
        "z": [4]
    }, {
        "c": [3],
        "chinese": "翁脚茂场砂羌柜顾怒",
        "g": [6, 7],
        "id": 1423,
        "j": [1],
        "length": 9,
        "m": [2],
        "n": [8],
        "pinyin": "wjmcsqggn",
        "q": [5],
        "s": [4],
        "w": [0]
    }, {
        "c": [1],
        "chinese": "彰冲油欺俩妇勾隆",
        "f": [5],
        "g": [6],
        "id": 1424,
        "l": [4, 7],
        "length": 8,
        "pinyin": "zcyqlfgl",
        "q": [3],
        "y": [2],
        "z": [0]
    }, {
        "chinese": "贞拷回绚翁潭苑菱俄锐",
        "e": [8],
        "h": [2],
        "id": 1425,
        "k": [1],
        "l": [7],
        "length": 10,
        "pinyin": "zkhxwtyler",
        "r": [9],
        "t": [5],
        "w": [4],
        "x": [3],
        "y": [6],
        "z": [0]
    }, {
        "b": [1],
        "c": [5],
        "chinese": "盯笨窖义押蹿非啦奈教",
        "d": [0],
        "f": [6],
        "id": 1426,
        "j": [2, 9],
        "l": [7],
        "length": 10,
        "n": [8],
        "pinyin": "dbjyycflnj",
        "y": [3, 4]
    }, {
        "chinese": "贯洞儒杜尤怔楔",
        "d": [1, 3],
        "g": [0],
        "id": 1427,
        "length": 7,
        "pinyin": "gdrdyzx",
        "r": [2],
        "x": [6],
        "y": [4],
        "z": [5]
    }, {
        "chinese": "轴昭隙垦疟",
        "id": 1428,
        "k": [3],
        "length": 5,
        "n": [4],
        "pinyin": "zzxkn",
        "x": [2],
        "z": [0, 1]
    }, {
        "b": [2],
        "chinese": "伐筏毖隙它美攒译",
        "f": [0, 1],
        "id": 1429,
        "length": 8,
        "m": [5],
        "pinyin": "ffbxtmzy",
        "t": [4],
        "x": [3],
        "y": [7],
        "z": [6]
    }, {
        "b": [2],
        "c": [6],
        "chinese": "阔途般鞋休梯簇菲港",
        "f": [7],
        "g": [8],
        "id": 1430,
        "k": [0],
        "length": 9,
        "pinyin": "ktbxxtcfg",
        "t": [1, 5],
        "x": [3, 4]
    }, {
        "chinese": "媒丁倦鬃袁雄檬筋仑共",
        "d": [1],
        "g": [9],
        "id": 1431,
        "j": [2, 7],
        "l": [8],
        "length": 10,
        "m": [0, 6],
        "pinyin": "mdjzyxmjlg",
        "x": [5],
        "y": [4],
        "z": [3]
    }, {
        "chinese": "锁硝浩蟹拥护倦漆奠阁",
        "d": [8],
        "g": [9],
        "h": [2, 5],
        "id": 1432,
        "j": [6],
        "length": 10,
        "pinyin": "sxhxyhjqdg",
        "q": [7],
        "s": [0],
        "x": [1, 3],
        "y": [4]
    }, {
        "a": [1],
        "c": [3],
        "chinese": "诬隘奋秤施",
        "f": [2],
        "id": 1433,
        "length": 5,
        "pinyin": "wafcs",
        "s": [4],
        "w": [0]
    }, {
        "a": [0],
        "chinese": "俺虾绍坠游肖箕钩涡",
        "g": [7],
        "id": 1434,
        "j": [6],
        "length": 9,
        "pinyin": "axszyxjgw",
        "s": [2],
        "w": [8],
        "x": [1, 5],
        "y": [4],
        "z": [3]
    }, {
        "chinese": "膳渠于峨姐虏",
        "e": [3],
        "id": 1435,
        "j": [4],
        "l": [5],
        "length": 6,
        "pinyin": "sqyejl",
        "q": [1],
        "s": [0],
        "y": [2]
    }, {
        "chinese": "捍帖剑塑娥虑考们辆壬铬",
        "e": [4],
        "g": [10],
        "h": [0],
        "id": 1436,
        "j": [2],
        "k": [6],
        "l": [5, 8],
        "length": 11,
        "m": [7],
        "pinyin": "htjselkmlrg",
        "r": [9],
        "s": [3],
        "t": [1]
    }, {
        "chinese": "硷迅踪擂",
        "id": 1437,
        "j": [0],
        "l": [3],
        "length": 4,
        "pinyin": "jxzl",
        "x": [1],
        "z": [2]
    }, {
        "chinese": "三付穗蒋体",
        "f": [1],
        "id": 1438,
        "j": [3],
        "length": 5,
        "pinyin": "sfsjt",
        "s": [0, 2],
        "t": [4]
    }, {
        "chinese": "青廊首憨",
        "h": [3],
        "id": 1439,
        "l": [1],
        "length": 4,
        "pinyin": "qlsh",
        "q": [0],
        "s": [2]
    }, {
        "chinese": "题讥桶肚惋",
        "d": [3],
        "id": 1440,
        "j": [1],
        "length": 5,
        "pinyin": "tjtdw",
        "t": [0, 2],
        "w": [4]
    }, {
        "c": [1, 3],
        "chinese": "资雌缘差贼邵",
        "id": 1441,
        "length": 6,
        "pinyin": "zcyczs",
        "s": [5],
        "y": [2],
        "z": [0, 4]
    }, {
        "chinese": "煌弥漠免接琐估弦椭停",
        "g": [6],
        "h": [0],
        "id": 1442,
        "j": [4],
        "length": 10,
        "m": [1, 2, 3],
        "pinyin": "hmmmjsgxtt",
        "s": [5],
        "t": [8, 9],
        "x": [7]
    }, {
        "a": [2],
        "b": [10],
        "chinese": "务沪傲贰冒磨祸负额剃并",
        "e": [3, 8],
        "f": [7],
        "h": [1, 6],
        "id": 1443,
        "length": 11,
        "m": [4, 5],
        "pinyin": "whaemmhfetb",
        "t": [9],
        "w": [0]
    }, {
        "a": [4],
        "b": [0],
        "chinese": "八综媚刁案坊摇",
        "d": [3],
        "f": [5],
        "id": 1444,
        "length": 7,
        "m": [2],
        "pinyin": "bzmdafy",
        "y": [6],
        "z": [1]
    }, {
        "chinese": "果麓睡清",
        "g": [0],
        "id": 1445,
        "l": [1],
        "length": 4,
        "pinyin": "glsq",
        "q": [3],
        "s": [2]
    }, {
        "c": [3],
        "chinese": "沪兹谢槽",
        "h": [0],
        "id": 1446,
        "length": 4,
        "pinyin": "hzxc",
        "x": [2],
        "z": [1]
    }, {
        "chinese": "湖挤舅眶伎努详淡流",
        "d": [7],
        "h": [0],
        "id": 1447,
        "j": [1, 2, 4],
        "k": [3],
        "l": [8],
        "length": 9,
        "n": [5],
        "pinyin": "hjjkjnxdl",
        "x": [6]
    }, {
        "chinese": "例偶挠姆植",
        "id": 1448,
        "l": [0],
        "length": 5,
        "m": [3],
        "n": [2],
        "o": [1],
        "pinyin": "lonmz",
        "z": [4]
    }, {
        "b": [0],
        "c": [2, 4],
        "chinese": "兵缘存笛侧阴其",
        "d": [3],
        "id": 1449,
        "length": 7,
        "pinyin": "bycdcyq",
        "q": [6],
        "y": [1, 5]
    }, {
        "chinese": "帆啤祥揽三",
        "f": [0],
        "id": 1450,
        "l": [3],
        "length": 5,
        "p": [1],
        "pinyin": "fpxls",
        "s": [4],
        "x": [2]
    }, {
        "b": [0],
        "c": [1],
        "chinese": "苯船氖佬",
        "id": 1451,
        "l": [3],
        "length": 4,
        "n": [2],
        "pinyin": "bcnl"
    }, {
        "chinese": "掂刀冠碌湍晕关站胀桔",
        "d": [0, 1],
        "g": [2, 6],
        "id": 1452,
        "j": [9],
        "l": [3],
        "length": 10,
        "pinyin": "ddgltygzzj",
        "t": [4],
        "y": [5],
        "z": [7, 8]
    }, {
        "a": [4],
        "c": [7],
        "chinese": "劲袒竿咬阿痔峻朝",
        "g": [2],
        "id": 1453,
        "j": [0, 6],
        "length": 8,
        "pinyin": "jtgyazjc",
        "t": [1],
        "y": [3],
        "z": [5]
    }, {
        "chinese": "郸桃蛾贿捎识良屏",
        "d": [0],
        "e": [2],
        "h": [3],
        "id": 1454,
        "l": [6],
        "length": 8,
        "p": [7],
        "pinyin": "dtehsslp",
        "s": [4, 5],
        "t": [1]
    }, {
        "b": [0],
        "chinese": "百淌矾琢聊剃乞",
        "f": [2],
        "id": 1455,
        "l": [4],
        "length": 7,
        "pinyin": "btfzltq",
        "q": [6],
        "t": [1, 5],
        "z": [3]
    }, {
        "chinese": "扭为痕建艳闰",
        "h": [2],
        "id": 1456,
        "j": [3],
        "length": 6,
        "n": [0],
        "pinyin": "nwhjyr",
        "r": [5],
        "w": [1],
        "y": [4]
    }, {
        "b": [10],
        "chinese": "类肩萄冕郁应溺搅甩婪剥",
        "id": 1457,
        "j": [1, 7],
        "l": [0, 9],
        "length": 11,
        "m": [3],
        "n": [6],
        "pinyin": "ljtmyynjslb",
        "s": [8],
        "t": [2],
        "y": [4, 5]
    }, {
        "chinese": "子罐舞姜",
        "g": [1],
        "id": 1458,
        "j": [3],
        "length": 4,
        "pinyin": "zgwj",
        "w": [2],
        "z": [0]
    }, {
        "b": [4, 8],
        "chinese": "揭肉德居倍押懂竣梆勺禹",
        "d": [2, 6],
        "id": 1459,
        "j": [0, 3, 7],
        "length": 11,
        "pinyin": "jrdjbydjbsy",
        "r": [1],
        "s": [9],
        "y": [5, 10]
    }, {
        "c": [3],
        "chinese": "哗涩崭凑秒",
        "h": [0],
        "id": 1460,
        "length": 5,
        "m": [4],
        "pinyin": "hszcm",
        "s": [1],
        "z": [2]
    }, {
        "b": [0, 4],
        "c": [3],
        "chinese": "伯他篙揣罢服巡也支肪",
        "f": [5, 9],
        "g": [2],
        "id": 1461,
        "length": 10,
        "pinyin": "btgcbfxyzf",
        "t": [1],
        "x": [6],
        "y": [7],
        "z": [8]
    }, {
        "chinese": "擂掂芦法帕摄坤",
        "d": [1],
        "f": [3],
        "id": 1462,
        "k": [6],
        "l": [0, 2],
        "length": 7,
        "p": [4],
        "pinyin": "ldlfpsk",
        "s": [5]
    }, {
        "chinese": "刁朴驱语",
        "d": [0],
        "id": 1463,
        "length": 4,
        "p": [1],
        "pinyin": "dpqy",
        "q": [2],
        "y": [3]
    }, {
        "a": [1],
        "chinese": "而矮屹阮茎溶缝谬坛",
        "e": [0],
        "f": [6],
        "id": 1464,
        "j": [4],
        "length": 9,
        "m": [7],
        "pinyin": "eayrjrfmt",
        "r": [3, 5],
        "t": [8],
        "y": [2]
    }, {
        "c": [0],
        "chinese": "除候卯逸疯",
        "f": [4],
        "h": [1],
        "id": 1465,
        "length": 5,
        "m": [2],
        "pinyin": "chmyf",
        "y": [3]
    }, {
        "c": [2],
        "chinese": "诽帚迟载羌引箩咎辕祟",
        "f": [0],
        "id": 1466,
        "j": [7],
        "l": [6],
        "length": 10,
        "pinyin": "fzczqyljys",
        "q": [4],
        "s": [9],
        "y": [5, 8],
        "z": [1, 3]
    }, {
        "b": [0],
        "chinese": "弊木玛纹忍赫",
        "h": [5],
        "id": 1467,
        "length": 6,
        "m": [1, 2],
        "pinyin": "bmmwrh",
        "r": [4],
        "w": [3]
    }, {
        "b": [9],
        "c": [1],
        "chinese": "淮沉驾二痪趴浪数悔爸锅",
        "e": [3],
        "g": [10],
        "h": [0, 4, 8],
        "id": 1468,
        "j": [2],
        "l": [6],
        "length": 11,
        "p": [5],
        "pinyin": "hcjehplshbg",
        "s": [7]
    }, {
        "chinese": "敛待踊刃连",
        "d": [1],
        "id": 1469,
        "l": [0, 4],
        "length": 5,
        "pinyin": "ldyrl",
        "r": [3],
        "y": [2]
    }, {
        "c": [4, 8],
        "chinese": "橡拥李肋撮体让陵铲影命",
        "id": 1470,
        "l": [2, 3, 7],
        "length": 11,
        "m": [10],
        "pinyin": "xyllctrlcym",
        "r": [6],
        "t": [5],
        "x": [0],
        "y": [1, 9]
    }, {
        "b": [1],
        "chinese": "秀谤宅斩",
        "id": 1471,
        "length": 4,
        "pinyin": "xbzz",
        "x": [0],
        "z": [2, 3]
    }, {
        "c": [6, 7],
        "chinese": "速付欲裸养西挫囱拼",
        "f": [1],
        "id": 1472,
        "l": [3],
        "length": 9,
        "p": [8],
        "pinyin": "sfylyxccp",
        "s": [0],
        "x": [5],
        "y": [2, 4]
    }, {
        "chinese": "届疚绒窖惰木",
        "d": [4],
        "id": 1473,
        "j": [0, 1, 3],
        "length": 6,
        "m": [5],
        "pinyin": "jjrjdm",
        "r": [2]
    }, {
        "b": [0],
        "chinese": "标立建匣提增证食滤",
        "id": 1474,
        "j": [2],
        "l": [1, 8],
        "length": 9,
        "pinyin": "bljxtzzsl",
        "s": [7],
        "t": [4],
        "x": [3],
        "z": [5, 6]
    }, {
        "chinese": "橡鸿毗娇途税腺缕埂女",
        "g": [8],
        "h": [1],
        "id": 1475,
        "j": [3],
        "l": [7],
        "length": 10,
        "n": [9],
        "p": [2],
        "pinyin": "xhpjtsxlgn",
        "s": [5],
        "t": [4],
        "x": [0, 6]
    }, {
        "chinese": "祟辊误舍",
        "g": [1],
        "id": 1476,
        "length": 4,
        "pinyin": "sgws",
        "s": [0, 3],
        "w": [2]
    }, {
        "c": [3, 8],
        "chinese": "皖爪颇差妇握猎翰稠",
        "f": [4],
        "h": [7],
        "id": 1477,
        "l": [6],
        "length": 9,
        "p": [2],
        "pinyin": "wzpcfwlhc",
        "w": [0, 5],
        "z": [1]
    }, {
        "b": [0],
        "chinese": "钡塔吁梅痒几",
        "id": 1478,
        "j": [5],
        "length": 6,
        "m": [3],
        "pinyin": "btxmyj",
        "t": [1],
        "x": [2],
        "y": [4]
    }, {
        "a": [4],
        "chinese": "误虞但诊懊曝痕栓",
        "d": [2],
        "h": [6],
        "id": 1479,
        "length": 8,
        "p": [5],
        "pinyin": "wydzaphs",
        "s": [7],
        "w": [0],
        "y": [1],
        "z": [3]
    }, {
        "b": [2, 4],
        "chinese": "恳勒剥急笆蹄牲",
        "id": 1480,
        "j": [3],
        "k": [0],
        "l": [1],
        "length": 7,
        "pinyin": "klbjbts",
        "s": [6],
        "t": [5]
    }, {
        "b": [3],
        "chinese": "嗜嚣栋辈粕酝痊撞",
        "d": [2],
        "id": 1481,
        "length": 8,
        "p": [4],
        "pinyin": "sxdbpyqz",
        "q": [6],
        "s": [0],
        "x": [1],
        "y": [5],
        "z": [7]
    }, {
        "a": [2],
        "b": [6],
        "chinese": "令像碍确犁迂拜纳毫酮缮",
        "h": [8],
        "id": 1482,
        "l": [0, 4],
        "length": 11,
        "n": [7],
        "pinyin": "lxaqlybnhts",
        "q": [3],
        "s": [10],
        "t": [9],
        "x": [1],
        "y": [5]
    }, {
        "chinese": "蜀乞葵赏帝力",
        "d": [4],
        "id": 1483,
        "k": [2],
        "l": [5],
        "length": 6,
        "pinyin": "sqksdl",
        "q": [1],
        "s": [0, 3]
    }, {
        "c": [0, 2],
        "chinese": "迟身程候论监葬掉独",
        "d": [7, 8],
        "h": [3],
        "id": 1484,
        "j": [5],
        "l": [4],
        "length": 9,
        "pinyin": "cschljzdd",
        "s": [1],
        "z": [6]
    }, {
        "chinese": "地摘训抑饺妓鉴微课",
        "d": [0],
        "id": 1485,
        "j": [4, 5, 6],
        "k": [8],
        "length": 9,
        "pinyin": "dzxyjjjwk",
        "w": [7],
        "x": [2],
        "y": [3],
        "z": [1]
    }, {
        "chinese": "姑谁镜胡悯哨豫窒憨",
        "g": [0],
        "h": [3, 8],
        "id": 1486,
        "j": [2],
        "length": 9,
        "m": [4],
        "pinyin": "gsjhmsyzh",
        "s": [1, 5],
        "y": [6],
        "z": [7]
    }, {
        "c": [4],
        "chinese": "灌抡立宋裁祖",
        "g": [0],
        "id": 1487,
        "l": [1, 2],
        "length": 6,
        "pinyin": "gllscz",
        "s": [3],
        "z": [5]
    }, {
        "chinese": "某屉功晌惧",
        "g": [2],
        "id": 1488,
        "j": [4],
        "length": 5,
        "m": [0],
        "pinyin": "mtgsj",
        "s": [3],
        "t": [1]
    }, {
        "chinese": "脂跺腾獭婉规溃贱",
        "d": [1],
        "g": [5],
        "id": 1489,
        "j": [7],
        "k": [6],
        "length": 8,
        "pinyin": "zdttwgkj",
        "t": [2, 3],
        "w": [4],
        "z": [0]
    }, {
        "c": [3],
        "chinese": "沫拴投窗溢闻扬杰",
        "id": 1490,
        "j": [7],
        "length": 8,
        "m": [0],
        "pinyin": "mstcywyj",
        "s": [1],
        "t": [2],
        "w": [5],
        "y": [4, 6]
    }, {
        "b": [1],
        "chinese": "垦拔宿狮暖吏壳涟藐辙",
        "id": 1491,
        "k": [0, 6],
        "l": [5, 7],
        "length": 10,
        "m": [8],
        "n": [4],
        "pinyin": "kbssnlklmz",
        "s": [2, 3],
        "z": [9]
    }, {
        "c": [0, 8],
        "chinese": "吵啼涨顺嚎隶劲腕仇裂",
        "h": [4],
        "id": 1492,
        "j": [6],
        "l": [5, 9],
        "length": 10,
        "pinyin": "ctzshljwcl",
        "s": [3],
        "t": [1],
        "w": [7],
        "z": [2]
    }, {
        "chinese": "弧涛拧饵",
        "e": [3],
        "h": [0],
        "id": 1493,
        "length": 4,
        "n": [2],
        "pinyin": "htne",
        "t": [1]
    }, {
        "c": [1],
        "chinese": "丝偿藻玄蹋滞稳淖",
        "id": 1494,
        "length": 8,
        "n": [7],
        "pinyin": "sczxtzwn",
        "s": [0],
        "t": [4],
        "w": [6],
        "x": [3],
        "z": [2, 5]
    }, {
        "b": [9],
        "chinese": "矣娠棕汹台劣铸酞命斌谋",
        "id": 1495,
        "l": [5],
        "length": 11,
        "m": [8, 10],
        "pinyin": "yszxtlztmbm",
        "s": [1],
        "t": [4, 7],
        "x": [3],
        "y": [0],
        "z": [2, 6]
    }, {
        "c": [0],
        "chinese": "畴身没手嘉",
        "id": 1496,
        "j": [4],
        "length": 5,
        "m": [2],
        "pinyin": "csmsj",
        "s": [1, 3]
    }, {
        "chinese": "踞共介贴猫倪侗寞",
        "d": [6],
        "g": [1],
        "id": 1497,
        "j": [0, 2],
        "length": 8,
        "m": [4, 7],
        "n": [5],
        "pinyin": "jgjtmndm",
        "t": [3]
    }, {
        "c": [2],
        "chinese": "鼎镊错惑",
        "d": [0],
        "h": [3],
        "id": 1498,
        "length": 4,
        "n": [1],
        "pinyin": "dnch"
    }, {
        "b": [0],
        "chinese": "炳授扔菇",
        "g": [3],
        "id": 1499,
        "length": 4,
        "pinyin": "bsrg",
        "r": [2],
        "s": [1]
    }, {
        "chinese": "侵昼兔卷饥缴血栅",
        "id": 1500,
        "j": [3, 4, 5],
        "length": 8,
        "pinyin": "qztjjjxz",
        "q": [0],
        "t": [2],
        "x": [6],
        "z": [1, 7]
    }, {
        "c": [3, 5],
        "chinese": "夹妖厢缠溅唇仙冻",
        "d": [7],
        "id": 1501,
        "j": [0, 4],
        "length": 8,
        "pinyin": "jyxcjcxd",
        "x": [2, 6],
        "y": [1]
    }, {
        "chinese": "迂馏氰兔使嗜昨",
        "id": 1502,
        "l": [1],
        "length": 7,
        "pinyin": "ylqtssz",
        "q": [2],
        "s": [4, 5],
        "t": [3],
        "y": [0],
        "z": [6]
    }, {
        "c": [1],
        "chinese": "孕睬怎笋歪涎歉",
        "id": 1503,
        "length": 7,
        "pinyin": "yczswxq",
        "q": [6],
        "s": [3],
        "w": [4],
        "x": [5],
        "y": [0],
        "z": [2]
    }, {
        "b": [6],
        "chinese": "铰歹洁森贸督惫趋孔",
        "d": [1, 5],
        "id": 1504,
        "j": [0, 2],
        "k": [8],
        "length": 9,
        "m": [4],
        "pinyin": "jdjsmdbqk",
        "q": [7],
        "s": [3]
    }, {
        "b": [1, 3],
        "chinese": "谣背仕勃吞果禄",
        "g": [5],
        "id": 1505,
        "l": [6],
        "length": 7,
        "pinyin": "ybsbtgl",
        "s": [2],
        "t": [4],
        "y": [0]
    }, {
        "c": [3],
        "chinese": "水拴沃持晕誉老喻汾竟",
        "f": [8],
        "id": 1506,
        "j": [9],
        "l": [6],
        "length": 10,
        "pinyin": "sswcyylyfj",
        "s": [0, 1],
        "w": [2],
        "y": [4, 5, 7]
    }, {
        "b": [2],
        "chinese": "玫州贝柯憨",
        "h": [4],
        "id": 1507,
        "k": [3],
        "length": 5,
        "m": [0],
        "pinyin": "mzbkh",
        "z": [1]
    }, {
        "b": [6],
        "chinese": "帚推扦琶栗钦北峡沸",
        "f": [8],
        "id": 1508,
        "l": [4],
        "length": 9,
        "p": [3],
        "pinyin": "ztqplqbxf",
        "q": [2, 5],
        "t": [1],
        "x": [7],
        "z": [0]
    }, {
        "chinese": "乒兑撂茵",
        "d": [1],
        "id": 1509,
        "l": [2],
        "length": 4,
        "p": [0],
        "pinyin": "pdly",
        "y": [3]
    }, {
        "chinese": "晶楞渠睡听赡盔综垫",
        "d": [8],
        "id": 1510,
        "j": [0],
        "k": [6],
        "l": [1],
        "length": 9,
        "pinyin": "jlqstskzd",
        "q": [2],
        "s": [3, 5],
        "t": [4],
        "z": [7]
    }, {
        "chinese": "附骇旋骑扎药穷峪",
        "f": [0],
        "h": [1],
        "id": 1511,
        "length": 8,
        "pinyin": "fhxqzyqy",
        "q": [3, 6],
        "x": [2],
        "y": [5, 7],
        "z": [4]
    }, {
        "chinese": "励狰书殴微詹咋苫秩",
        "id": 1512,
        "l": [0],
        "length": 9,
        "o": [3],
        "pinyin": "lzsowzzsz",
        "s": [2, 7],
        "w": [4],
        "z": [1, 5, 6, 8]
    }, {
        "chinese": "徽水净实踞",
        "h": [0],
        "id": 1513,
        "j": [2, 4],
        "length": 5,
        "pinyin": "hsjsj",
        "s": [1, 3]
    }, {
        "chinese": "咳健霍娶鹃菲栏酞冈貉",
        "f": [5],
        "g": [8],
        "h": [0, 2, 9],
        "id": 1514,
        "j": [1, 4],
        "l": [6],
        "length": 10,
        "pinyin": "hjhqjfltgh",
        "q": [3],
        "t": [7]
    }, {
        "chinese": "淡耐翁浊娱杠墓匈钻殿幌",
        "d": [0, 9],
        "g": [5],
        "h": [10],
        "id": 1515,
        "length": 11,
        "m": [6],
        "n": [1],
        "pinyin": "dnwzygmxzdh",
        "w": [2],
        "x": [7],
        "y": [4],
        "z": [3, 8]
    }, {
        "c": [6],
        "chinese": "瞒嚼亮孔衷瞄醋",
        "id": 1516,
        "j": [1],
        "k": [3],
        "l": [2],
        "length": 7,
        "m": [0, 5],
        "pinyin": "mjlkzmc",
        "z": [4]
    }, {
        "c": [4],
        "chinese": "蜘模哗莆尝邢缓伎域瞩",
        "h": [2, 6],
        "id": 1517,
        "j": [7],
        "length": 10,
        "m": [1],
        "p": [3],
        "pinyin": "zmhpcxhjyz",
        "x": [5],
        "y": [8],
        "z": [0, 9]
    }, {
        "b": [4],
        "chinese": "故沁给炎焙众疙",
        "g": [0, 2, 6],
        "id": 1518,
        "length": 7,
        "pinyin": "gqgybzg",
        "q": [1],
        "y": [3],
        "z": [5]
    }, {
        "b": [3],
        "chinese": "托实燕宝",
        "id": 1519,
        "length": 4,
        "pinyin": "tsyb",
        "s": [1],
        "t": [0],
        "y": [2]
    }, {
        "c": [2],
        "chinese": "滔荔场知魔",
        "id": 1520,
        "l": [1],
        "length": 5,
        "m": [4],
        "pinyin": "tlczm",
        "t": [0],
        "z": [3]
    }, {
        "chinese": "莲谆魂呜颖遂肄香",
        "h": [2],
        "id": 1521,
        "l": [0],
        "length": 8,
        "pinyin": "lzhwysyx",
        "s": [5],
        "w": [3],
        "x": [7],
        "y": [4, 6],
        "z": [1]
    }, {
        "chinese": "炙伦慕镰",
        "id": 1522,
        "l": [1, 3],
        "length": 4,
        "m": [2],
        "pinyin": "zlml",
        "z": [0]
    }, {
        "chinese": "俩辱焚渊驾休",
        "f": [2],
        "id": 1523,
        "j": [4],
        "l": [0],
        "length": 6,
        "pinyin": "lrfyjx",
        "r": [1],
        "x": [5],
        "y": [3]
    }, {
        "b": [1],
        "chinese": "觉膀征得谚态邹刊羔挝",
        "d": [3],
        "g": [8],
        "id": 1524,
        "j": [0],
        "k": [7],
        "length": 10,
        "pinyin": "jbzdytzkgw",
        "t": [5],
        "w": [9],
        "y": [4],
        "z": [2, 6]
    }, {
        "a": [1],
        "b": [2],
        "chinese": "球肮辈琉缩染",
        "id": 1525,
        "l": [3],
        "length": 6,
        "pinyin": "qablsr",
        "q": [0],
        "r": [5],
        "s": [4]
    }, {
        "chinese": "鞋尉弓堤访栋",
        "d": [3, 5],
        "f": [4],
        "g": [2],
        "id": 1526,
        "length": 6,
        "pinyin": "xwgdfd",
        "w": [1],
        "x": [0]
    }, {
        "c": [9],
        "chinese": "难熟婆瞎窝换祖深达唱诸",
        "d": [8],
        "h": [5],
        "id": 1527,
        "length": 11,
        "n": [0],
        "p": [2],
        "pinyin": "nspxwhzsdcz",
        "s": [1, 7],
        "w": [4],
        "x": [3],
        "z": [6, 10]
    }, {
        "chinese": "肪译君汁逃泥",
        "f": [0],
        "id": 1528,
        "j": [2],
        "length": 6,
        "n": [5],
        "pinyin": "fyjztn",
        "t": [4],
        "y": [1],
        "z": [3]
    }, {
        "a": [3],
        "chinese": "口候吮奥",
        "h": [1],
        "id": 1529,
        "k": [0],
        "length": 4,
        "pinyin": "khsa",
        "s": [2]
    }, {
        "c": [2],
        "chinese": "牲裕错则浊坏弗谬忌垫",
        "d": [9],
        "f": [6],
        "h": [5],
        "id": 1530,
        "j": [8],
        "length": 10,
        "m": [7],
        "pinyin": "syczzhfmjd",
        "s": [0],
        "y": [1],
        "z": [3, 4]
    }, {
        "b": [4],
        "chinese": "痉炕遏跨包敢腕",
        "e": [2],
        "g": [5],
        "id": 1531,
        "j": [0],
        "k": [1, 3],
        "length": 7,
        "pinyin": "jkekbgw",
        "w": [6]
    }, {
        "chinese": "戈较蹋急仰深汲",
        "g": [0],
        "id": 1532,
        "j": [1, 3, 6],
        "length": 7,
        "pinyin": "gjtjysj",
        "s": [5],
        "t": [2],
        "y": [4]
    }, {
        "a": [5],
        "b": [1, 3],
        "chinese": "染泵席巴坎肮渣显卉",
        "h": [8],
        "id": 1533,
        "k": [4],
        "length": 9,
        "pinyin": "rbxbkazxh",
        "r": [0],
        "x": [2, 7],
        "z": [6]
    }, {
        "b": [3],
        "chinese": "捉桅搅瓣玄预上房",
        "f": [7],
        "id": 1534,
        "j": [2],
        "length": 8,
        "pinyin": "zwjbxysf",
        "s": [6],
        "w": [1],
        "x": [4],
        "y": [5],
        "z": [0]
    }, {
        "chinese": "弗忌恩凭腕",
        "e": [2],
        "f": [0],
        "id": 1535,
        "j": [1],
        "length": 5,
        "p": [3],
        "pinyin": "fjepw",
        "w": [4]
    }, {
        "c": [4],
        "chinese": "复轿泌汰冲",
        "f": [0],
        "id": 1536,
        "j": [1],
        "length": 5,
        "m": [2],
        "pinyin": "fjmtc",
        "t": [3]
    }, {
        "chinese": "疾杏荔掘",
        "id": 1537,
        "j": [0, 3],
        "l": [2],
        "length": 4,
        "pinyin": "jxlj",
        "x": [1]
    }, {
        "c": [0, 4],
        "chinese": "绸伞捐皋础砰呢蛹徽疥贩",
        "f": [10],
        "g": [3],
        "h": [8],
        "id": 1538,
        "j": [2, 9],
        "length": 11,
        "n": [6],
        "p": [5],
        "pinyin": "csjgcpnyhjf",
        "s": [1],
        "y": [7]
    }, {
        "b": [9],
        "c": [8],
        "chinese": "穷耸誊逸险梢洽炉吹彪",
        "id": 1539,
        "l": [7],
        "length": 10,
        "pinyin": "qstyxsqlcb",
        "q": [0, 6],
        "s": [1, 5],
        "t": [2],
        "x": [4],
        "y": [3]
    }, {
        "chinese": "温烦吝模",
        "f": [1],
        "id": 1540,
        "l": [2],
        "length": 4,
        "m": [3],
        "pinyin": "wflm",
        "w": [0]
    }, {
        "chinese": "凶纱附兑迎雷",
        "d": [3],
        "f": [2],
        "id": 1541,
        "l": [5],
        "length": 6,
        "pinyin": "xsfdyl",
        "s": [1],
        "x": [0],
        "y": [4]
    }, {
        "b": [3],
        "chinese": "款罗潭辫捏",
        "id": 1542,
        "k": [0],
        "l": [1],
        "length": 5,
        "n": [4],
        "pinyin": "kltbn",
        "t": [2]
    }, {
        "c": [1],
        "chinese": "津翠痒汽",
        "id": 1543,
        "j": [0],
        "length": 4,
        "pinyin": "jcyq",
        "q": [3],
        "y": [2]
    }, {
        "b": [5],
        "chinese": "跟阎维空澎霸倔肝室蔷",
        "g": [0, 7],
        "id": 1544,
        "j": [6],
        "k": [3],
        "length": 10,
        "p": [4],
        "pinyin": "gywkpbjgsq",
        "q": [9],
        "s": [8],
        "w": [2],
        "y": [1]
    }, {
        "c": [6, 7],
        "chinese": "众跳邯是旨秧糙馋愈行",
        "h": [2],
        "id": 1545,
        "length": 10,
        "pinyin": "zthszyccyx",
        "s": [3],
        "t": [1],
        "x": [9],
        "y": [5, 8],
        "z": [0, 4]
    }, {
        "c": [3],
        "chinese": "咯心猪采逛",
        "g": [0, 4],
        "id": 1546,
        "length": 5,
        "pinyin": "gxzcg",
        "x": [1],
        "z": [2]
    }, {
        "chinese": "洗友吸辆汁银茄刨肇",
        "id": 1547,
        "j": [6],
        "l": [3],
        "length": 9,
        "p": [7],
        "pinyin": "xyxlzyjpz",
        "x": [0, 2],
        "y": [1, 5],
        "z": [4, 8]
    }, {
        "c": [3],
        "chinese": "紊男死颤",
        "id": 1548,
        "length": 4,
        "n": [1],
        "pinyin": "wnsc",
        "s": [2],
        "w": [0]
    }, {
        "chinese": "射筒毁睛截钙佃居",
        "d": [6],
        "g": [5],
        "h": [2],
        "id": 1549,
        "j": [3, 4, 7],
        "length": 8,
        "pinyin": "sthjjgdj",
        "s": [0],
        "t": [1]
    }, {
        "b": [1],
        "chinese": "雄痹义南圃",
        "id": 1550,
        "length": 5,
        "n": [3],
        "p": [4],
        "pinyin": "xbynp",
        "x": [0],
        "y": [2]
    }, {
        "b": [1],
        "c": [2],
        "chinese": "雕拨粗由尾较舅愿艳徽",
        "d": [0],
        "h": [9],
        "id": 1551,
        "j": [5, 6],
        "length": 10,
        "pinyin": "dbcywjjyyh",
        "w": [4],
        "y": [3, 7, 8]
    }, {
        "c": [8],
        "chinese": "疑掩赚括祖选昧擎纯",
        "id": 1552,
        "k": [3],
        "length": 9,
        "m": [6],
        "pinyin": "yyzkzxmqc",
        "q": [7],
        "x": [5],
        "y": [0, 1],
        "z": [2, 4]
    }, {
        "chinese": "峨召歧佣耳蚂垄联",
        "e": [0, 4],
        "id": 1553,
        "l": [6, 7],
        "length": 8,
        "m": [5],
        "pinyin": "ezqyemll",
        "q": [2],
        "y": [3],
        "z": [1]
    }, {
        "b": [3],
        "chinese": "海凋惺蹦敦垫廖射",
        "d": [1, 4, 5],
        "h": [0],
        "id": 1554,
        "l": [6],
        "length": 8,
        "pinyin": "hdxbddls",
        "s": [7],
        "x": [2]
    }, {
        "chinese": "诌坍什衫俱俯睁",
        "f": [5],
        "id": 1555,
        "j": [4],
        "length": 7,
        "pinyin": "ztssjfz",
        "s": [2, 3],
        "t": [1],
        "z": [0, 6]
    }, {
        "c": [1],
        "chinese": "鹿蠢孪钻匠压",
        "id": 1556,
        "j": [4],
        "l": [0, 2],
        "length": 6,
        "pinyin": "lclzjy",
        "y": [5],
        "z": [3]
    }, {
        "b": [7],
        "chinese": "胁织涸施兴恢考怖",
        "h": [2, 5],
        "id": 1557,
        "k": [6],
        "length": 8,
        "pinyin": "xzhsxhkb",
        "s": [3],
        "x": [0, 4],
        "z": [1]
    }, {
        "chinese": "唤烫市讶吭洲哟拟赔射",
        "h": [0],
        "id": 1558,
        "k": [4],
        "length": 10,
        "n": [7],
        "p": [8],
        "pinyin": "htsykzynps",
        "s": [2, 9],
        "t": [1],
        "y": [3, 6],
        "z": [5]
    }, {
        "chinese": "瞩认怂后泊障鲁攻",
        "g": [7],
        "h": [3],
        "id": 1559,
        "l": [6],
        "length": 8,
        "p": [4],
        "pinyin": "zrshpzlg",
        "r": [1],
        "s": [2],
        "z": [0, 5]
    }, {
        "b": [3],
        "c": [1, 2],
        "chinese": "坞赤搽鲍侥猴奖上林继待",
        "d": [10],
        "h": [5],
        "id": 1560,
        "j": [4, 6, 9],
        "l": [8],
        "length": 11,
        "pinyin": "wccbjhjsljd",
        "s": [7],
        "w": [0]
    }, {
        "chinese": "衍饰颊长狄帘萤斡泪廉",
        "d": [4],
        "id": 1561,
        "j": [2],
        "l": [5, 8, 9],
        "length": 10,
        "pinyin": "ysjzdlywll",
        "s": [1],
        "w": [7],
        "y": [0, 6],
        "z": [3]
    }, {
        "c": [4],
        "chinese": "军铝雨躬车值",
        "g": [3],
        "id": 1562,
        "j": [0],
        "l": [1],
        "length": 6,
        "pinyin": "jlygcz",
        "y": [2],
        "z": [5]
    }, {
        "b": [8],
        "c": [0, 6],
        "chinese": "撮忻镐世筋质凑览吧",
        "g": [2],
        "id": 1563,
        "j": [4],
        "l": [7],
        "length": 9,
        "pinyin": "cxgsjzclb",
        "s": [3],
        "x": [1],
        "z": [5]
    }, {
        "c": [8],
        "chinese": "稍影爵巷节钨纺列抽颅由",
        "f": [6],
        "id": 1564,
        "j": [2, 4],
        "l": [7, 9],
        "length": 11,
        "pinyin": "syjxjwflcly",
        "s": [0],
        "w": [5],
        "x": [3],
        "y": [1, 10]
    }, {
        "chinese": "凛驹眩漾",
        "id": 1565,
        "j": [1],
        "l": [0],
        "length": 4,
        "pinyin": "ljxy",
        "x": [2],
        "y": [3]
    }, {
        "c": [1],
        "chinese": "他趁枣舞露练",
        "id": 1566,
        "l": [4, 5],
        "length": 6,
        "pinyin": "tczwll",
        "t": [0],
        "w": [3],
        "z": [2]
    }, {
        "chinese": "褐沽浸笑援鹏祁量饶轧",
        "g": [1],
        "h": [0],
        "id": 1567,
        "j": [2],
        "l": [7],
        "length": 10,
        "p": [5],
        "pinyin": "hgjxypqlry",
        "q": [6],
        "r": [8],
        "x": [3],
        "y": [4, 9]
    }, {
        "b": [7],
        "c": [2],
        "chinese": "盯素初屉洱挝僻本",
        "d": [0],
        "e": [4],
        "id": 1568,
        "length": 8,
        "p": [6],
        "pinyin": "dsctewpb",
        "s": [1],
        "t": [3],
        "w": [5]
    }, {
        "b": [1],
        "chinese": "呸碧府酚媚佯拍徽",
        "f": [2, 3],
        "h": [7],
        "id": 1569,
        "length": 8,
        "m": [4],
        "p": [0, 6],
        "pinyin": "pbffmyph",
        "y": [5]
    }, {
        "chinese": "影酷竣永撕坤",
        "id": 1570,
        "j": [2],
        "k": [1, 5],
        "length": 6,
        "pinyin": "ykjysk",
        "s": [4],
        "y": [0, 3]
    }, {
        "chinese": "架滓樟氛敷埔掷献囚怒猩",
        "f": [3, 4],
        "id": 1571,
        "j": [0],
        "length": 11,
        "n": [9],
        "p": [5],
        "pinyin": "jzzffpzxqnx",
        "q": [8],
        "x": [7, 10],
        "z": [1, 2, 6]
    }, {
        "c": [3],
        "chinese": "暑挝灵糙足示涨纵掏嚣",
        "id": 1572,
        "l": [2],
        "length": 10,
        "pinyin": "swlczszztx",
        "s": [0, 5],
        "t": [8],
        "w": [1],
        "x": [9],
        "z": [4, 6, 7]
    }, {
        "b": [3],
        "c": [2],
        "chinese": "页希成壁哟秋六蹲扰苟宵",
        "d": [7],
        "g": [9],
        "id": 1573,
        "l": [6],
        "length": 11,
        "pinyin": "yxcbyqldrgx",
        "q": [5],
        "r": [8],
        "x": [1, 10],
        "y": [0, 4]
    }, {
        "c": [5],
        "chinese": "樊离醉旷遣翠弦文湍渝蛙",
        "f": [0],
        "id": 1574,
        "k": [3],
        "l": [1],
        "length": 11,
        "pinyin": "flzkqcxwtyw",
        "q": [4],
        "t": [8],
        "w": [7, 10],
        "x": [6],
        "y": [9],
        "z": [2]
    }, {
        "b": [7],
        "chinese": "虹绳期缺两腔腑蓖惑锑状",
        "f": [6],
        "h": [0, 8],
        "id": 1575,
        "l": [4],
        "length": 11,
        "pinyin": "hsqqlqfbhtz",
        "q": [2, 3, 5],
        "s": [1],
        "t": [9],
        "z": [10]
    }, {
        "chinese": "鸽喧氯栋掩君",
        "d": [3],
        "g": [0],
        "id": 1576,
        "j": [5],
        "l": [2],
        "length": 6,
        "pinyin": "gxldyj",
        "x": [1],
        "y": [4]
    }, {
        "chinese": "荒修饺三喉商逐需熄",
        "h": [0, 4],
        "id": 1577,
        "j": [2],
        "length": 9,
        "pinyin": "hxjshszxx",
        "s": [3, 5],
        "x": [1, 7, 8],
        "z": [6]
    }, {
        "chinese": "靡愿翻蔓扬凸闻脑",
        "f": [2],
        "id": 1578,
        "length": 8,
        "m": [0, 3],
        "n": [7],
        "pinyin": "myfmytwn",
        "t": [5],
        "w": [6],
        "y": [1, 4]
    }, {
        "b": [6],
        "chinese": "码态屠枫轩巷霸牌碘",
        "d": [8],
        "f": [3],
        "id": 1579,
        "length": 9,
        "m": [0],
        "p": [7],
        "pinyin": "mttfxxbpd",
        "t": [1, 2],
        "x": [4, 5]
    }, {
        "chinese": "将挣私怪冉殃逐",
        "g": [3],
        "id": 1580,
        "j": [0],
        "length": 7,
        "pinyin": "jzsgryz",
        "r": [4],
        "s": [2],
        "y": [5],
        "z": [1, 6]
    }, {
        "c": [1, 2],
        "chinese": "司除蠢羹",
        "g": [3],
        "id": 1581,
        "length": 4,
        "pinyin": "sccg",
        "s": [0]
    }, {
        "c": [2],
        "chinese": "店皂畴木助",
        "d": [0],
        "id": 1582,
        "length": 5,
        "m": [3],
        "pinyin": "dzcmz",
        "z": [1, 4]
    }, {
        "chinese": "体琶怪乖镣挥瞬集",
        "g": [2, 3],
        "h": [5],
        "id": 1583,
        "j": [7],
        "l": [4],
        "length": 8,
        "p": [1],
        "pinyin": "tpgglhsj",
        "s": [6],
        "t": [0]
    }, {
        "c": [10],
        "chinese": "遣鬃肆载鞠着状期腥俭查",
        "id": 1584,
        "j": [4, 9],
        "length": 11,
        "pinyin": "qzszjzzqxjc",
        "q": [0, 7],
        "s": [2],
        "x": [8],
        "z": [1, 3, 5, 6]
    }, {
        "b": [2],
        "c": [5],
        "chinese": "蔑菇斑里伟蝉",
        "g": [1],
        "id": 1585,
        "l": [3],
        "length": 6,
        "m": [0],
        "pinyin": "mgblwc",
        "w": [4]
    }, {
        "c": [1],
        "chinese": "阑丑疾萤切",
        "id": 1586,
        "j": [2],
        "l": [0],
        "length": 5,
        "pinyin": "lcjyq",
        "q": [4],
        "y": [3]
    }, {
        "c": [3],
        "chinese": "艇怂童崇汽拇勺讫忿",
        "f": [8],
        "id": 1587,
        "length": 9,
        "m": [5],
        "pinyin": "tstcqmsqf",
        "q": [4, 7],
        "s": [1, 6],
        "t": [0, 2]
    }, {
        "a": [6],
        "b": [3],
        "chinese": "铺涪溉币由驼隘炯巳",
        "f": [1],
        "g": [2],
        "id": 1588,
        "j": [7],
        "length": 9,
        "p": [0],
        "pinyin": "pfgbytajs",
        "s": [8],
        "t": [5],
        "y": [4]
    }, {
        "c": [7],
        "chinese": "腋扫探缺黄鸵旨仓列",
        "h": [4],
        "id": 1589,
        "l": [8],
        "length": 9,
        "pinyin": "ystqhtzcl",
        "q": [3],
        "s": [1],
        "t": [2, 5],
        "y": [0],
        "z": [6]
    }, {
        "b": [9],
        "c": [1],
        "chinese": "计苍嘻益毒引颖啤汝瓣",
        "d": [4],
        "id": 1590,
        "j": [0],
        "length": 10,
        "p": [7],
        "pinyin": "jcxydyyprb",
        "r": [8],
        "x": [2],
        "y": [3, 5, 6]
    }, {
        "chinese": "站框塞惶拳儿践",
        "e": [5],
        "h": [3],
        "id": 1591,
        "j": [6],
        "k": [1],
        "length": 7,
        "pinyin": "zkshqej",
        "q": [4],
        "s": [2],
        "z": [0]
    }, {
        "c": [0],
        "chinese": "插牧肩瓮畔趋核锡嚷",
        "h": [6],
        "id": 1592,
        "j": [2],
        "length": 9,
        "m": [1],
        "p": [4],
        "pinyin": "cmjwpqhxr",
        "q": [5],
        "r": [8],
        "w": [3],
        "x": [7]
    }, {
        "chinese": "匀疏感瑚徒",
        "g": [2],
        "h": [3],
        "id": 1593,
        "length": 5,
        "pinyin": "ysght",
        "s": [1],
        "t": [4],
        "y": [0]
    }, {
        "b": [4],
        "chinese": "蔑越片简币矾梅曳依庆千",
        "f": [5],
        "id": 1594,
        "j": [3],
        "length": 11,
        "m": [0, 6],
        "p": [2],
        "pinyin": "mypjbfmyyqq",
        "q": [9, 10],
        "y": [1, 7, 8]
    }, {
        "chinese": "钙下攒慧拿狄熔鲁启骸搅",
        "d": [5],
        "g": [0],
        "h": [3, 9],
        "id": 1595,
        "j": [10],
        "l": [7],
        "length": 11,
        "n": [4],
        "pinyin": "gxzhndrlqhj",
        "q": [8],
        "r": [6],
        "x": [1],
        "z": [2]
    }, {
        "chinese": "譬来虽积江芽",
        "id": 1596,
        "j": [3, 4],
        "l": [1],
        "length": 6,
        "p": [0],
        "pinyin": "plsjjy",
        "s": [2],
        "y": [5]
    }, {
        "chinese": "薯慢缘憨下度慰苦南嘛旨",
        "d": [5],
        "h": [3],
        "id": 1597,
        "k": [7],
        "length": 11,
        "m": [1, 9],
        "n": [8],
        "pinyin": "smyhxdwknmz",
        "s": [0],
        "w": [6],
        "x": [4],
        "y": [2],
        "z": [10]
    }, {
        "chinese": "桐振来丰榔噎",
        "f": [3],
        "id": 1598,
        "l": [2, 4],
        "length": 6,
        "pinyin": "tzlfly",
        "t": [0],
        "y": [5],
        "z": [1]
    }, {
        "chinese": "匣厢牺项酋衅僵",
        "id": 1599,
        "j": [6],
        "length": 7,
        "pinyin": "xxxxqxj",
        "q": [4],
        "x": [0, 1, 2, 3, 5]
    }, {
        "b": [1],
        "c": [0],
        "chinese": "穿铂瑟带怂修",
        "d": [3],
        "id": 1600,
        "length": 6,
        "pinyin": "cbsdsx",
        "s": [2, 4],
        "x": [5]
    }, {
        "b": [7],
        "chinese": "劳幸叠嚏孵掳徊舶疹吓",
        "d": [2],
        "f": [4],
        "h": [6],
        "id": 1601,
        "l": [0, 5],
        "length": 10,
        "pinyin": "lxdtflhbzx",
        "t": [3],
        "x": [1, 9],
        "z": [8]
    }, {
        "c": [9, 10],
        "chinese": "烽掖临离据忙颧念族错承",
        "f": [0],
        "id": 1602,
        "j": [4],
        "l": [2, 3],
        "length": 11,
        "m": [5],
        "n": [7],
        "pinyin": "fylljmqnzcc",
        "q": [6],
        "y": [1],
        "z": [8]
    }, {
        "c": [0, 5],
        "chinese": "叉货贿鸯萝淬",
        "h": [1, 2],
        "id": 1603,
        "l": [4],
        "length": 6,
        "pinyin": "chhylc",
        "y": [3]
    }, {
        "chinese": "汛护屎贾院贩婿呻俊烯刊",
        "f": [5],
        "h": [1],
        "id": 1604,
        "j": [3, 8],
        "k": [10],
        "length": 11,
        "pinyin": "xhsjyfxsjxk",
        "s": [2, 7],
        "x": [0, 6, 9],
        "y": [4]
    }, {
        "b": [4],
        "chinese": "翰库米咯步铁壹聂笑",
        "g": [3],
        "h": [0],
        "id": 1605,
        "k": [1],
        "length": 9,
        "m": [2],
        "n": [7],
        "pinyin": "hkmgbtynx",
        "t": [5],
        "x": [8],
        "y": [6]
    }, {
        "c": [2],
        "chinese": "芹瘸策好吞",
        "h": [3],
        "id": 1606,
        "length": 5,
        "pinyin": "qqcht",
        "q": [0, 1],
        "t": [4]
    }, {
        "c": [6],
        "chinese": "晚您麻亨送拂初",
        "f": [5],
        "h": [3],
        "id": 1607,
        "length": 7,
        "m": [2],
        "n": [1],
        "pinyin": "wnmhsfc",
        "s": [4],
        "w": [0]
    }, {
        "c": [1, 2],
        "chinese": "牧成赐下独和",
        "d": [4],
        "h": [5],
        "id": 1608,
        "length": 6,
        "m": [0],
        "pinyin": "mccxdh",
        "x": [3]
    }, {
        "chinese": "哇园糜炉烤遗施分润悸",
        "f": [7],
        "id": 1609,
        "j": [9],
        "k": [4],
        "l": [3],
        "length": 10,
        "m": [2],
        "pinyin": "wymlkysfrj",
        "r": [8],
        "s": [6],
        "w": [0],
        "y": [1, 5]
    }, {
        "chinese": "腋艰对骏碳她昨欲攀违疑",
        "d": [2],
        "id": 1610,
        "j": [1, 3],
        "length": 11,
        "p": [8],
        "pinyin": "yjdjttzypwy",
        "t": [4, 5],
        "w": [9],
        "y": [0, 7, 10],
        "z": [6]
    }, {
        "c": [4],
        "chinese": "筷离茅陪称呸",
        "id": 1611,
        "k": [0],
        "l": [1],
        "length": 6,
        "m": [2],
        "p": [3, 5],
        "pinyin": "klmpcp"
    }, {
        "c": [3],
        "chinese": "疼慑蛛郴堂竿梧煞",
        "g": [5],
        "id": 1612,
        "length": 8,
        "pinyin": "tszctgws",
        "s": [1, 7],
        "t": [0, 4],
        "w": [6],
        "z": [2]
    }, {
        "c": [2, 10],
        "chinese": "升粤撤戈霉拇耘馈翻搪初",
        "f": [8],
        "g": [3],
        "id": 1613,
        "k": [7],
        "length": 11,
        "m": [4, 5],
        "pinyin": "sycgmmykftc",
        "s": [0],
        "t": [9],
        "y": [1, 6]
    }, {
        "chinese": "索赫傀衙条",
        "g": [2],
        "h": [1],
        "id": 1614,
        "length": 5,
        "pinyin": "shgyt",
        "s": [0],
        "t": [4],
        "y": [3]
    }, {
        "c": [0],
        "chinese": "愁述歉判项荒",
        "h": [5],
        "id": 1615,
        "length": 6,
        "p": [3],
        "pinyin": "csqpxh",
        "q": [2],
        "s": [1],
        "x": [4]
    }, {
        "chinese": "晾绝郝贱紧",
        "h": [2],
        "id": 1616,
        "j": [1, 3, 4],
        "l": [0],
        "length": 5,
        "pinyin": "ljhjj"
    }, {
        "chinese": "拟振啼郡萍纶椅遣小",
        "id": 1617,
        "j": [3],
        "l": [5],
        "length": 9,
        "n": [0],
        "p": [4],
        "pinyin": "nztjplyqx",
        "q": [7],
        "t": [2],
        "x": [8],
        "y": [6],
        "z": [1]
    }, {
        "a": [8],
        "c": [1],
        "chinese": "吟矗吏普浊贷竣拭奥铁",
        "d": [5],
        "id": 1618,
        "j": [6],
        "l": [2],
        "length": 10,
        "p": [3],
        "pinyin": "yclpzdjsat",
        "s": [7],
        "t": [9],
        "y": [0],
        "z": [4]
    }, {
        "chinese": "恼高幼陕",
        "g": [1],
        "id": 1619,
        "length": 4,
        "n": [0],
        "pinyin": "ngys",
        "s": [3],
        "y": [2]
    }, {
        "chinese": "屯虽盘再督状纸珐沮木围",
        "d": [4],
        "f": [7],
        "id": 1620,
        "j": [8],
        "length": 11,
        "m": [9],
        "p": [2],
        "pinyin": "tspzdzzfjmw",
        "s": [1],
        "t": [0],
        "w": [10],
        "z": [3, 5, 6]
    }, {
        "chinese": "邵约闺诣狠",
        "g": [2],
        "h": [4],
        "id": 1621,
        "length": 5,
        "pinyin": "sygyh",
        "s": [0],
        "y": [1, 3]
    }, {
        "chinese": "克拙摔慑勘骄吭盘公忌酗",
        "g": [8],
        "id": 1622,
        "j": [5, 9],
        "k": [0, 4, 6],
        "length": 11,
        "p": [7],
        "pinyin": "kzsskjkpgjx",
        "s": [2, 3],
        "x": [10],
        "z": [1]
    }, {
        "b": [3, 4],
        "chinese": "苑瓜傀勃辫禾焦估润奖巩",
        "g": [1, 2, 7, 10],
        "h": [5],
        "id": 1623,
        "j": [6, 9],
        "length": 11,
        "pinyin": "yggbbhjgrjg",
        "r": [8],
        "y": [0]
    }, {
        "b": [1, 3],
        "c": [0, 4],
        "chinese": "炒备确瓣畜咐宁",
        "f": [5],
        "id": 1624,
        "length": 7,
        "n": [6],
        "pinyin": "cbqbcfn",
        "q": [2]
    }, {
        "chinese": "盾诽泼倔",
        "d": [0],
        "f": [1],
        "id": 1625,
        "j": [3],
        "length": 4,
        "p": [2],
        "pinyin": "dfpj"
    }, {
        "c": [3],
        "chinese": "狙疽悔瞅榷勺客陆扎竣",
        "h": [2],
        "id": 1626,
        "j": [0, 1, 9],
        "k": [6],
        "l": [7],
        "length": 10,
        "pinyin": "jjhcqsklzj",
        "q": [4],
        "s": [5],
        "z": [8]
    }, {
        "b": [4],
        "c": [1],
        "chinese": "重藏灵缓膀箱挚锭",
        "d": [7],
        "h": [3],
        "id": 1627,
        "l": [2],
        "length": 8,
        "pinyin": "zclhbxzd",
        "x": [5],
        "z": [0, 6]
    }, {
        "b": [1],
        "chinese": "炔变竟炮银",
        "g": [0],
        "id": 1628,
        "j": [2],
        "length": 5,
        "p": [3],
        "pinyin": "gbjpy",
        "y": [4]
    }, {
        "a": [5],
        "chinese": "镶漠惮襄取翱下涉葡",
        "d": [2],
        "id": 1629,
        "length": 9,
        "m": [1],
        "p": [8],
        "pinyin": "xmdxqaxsp",
        "q": [4],
        "s": [7],
        "x": [0, 3, 6]
    }, {
        "b": [5],
        "chinese": "狰虽显嘛侵簿供绳么",
        "g": [6],
        "id": 1630,
        "length": 9,
        "m": [3, 8],
        "pinyin": "zsxmqbgsm",
        "q": [4],
        "s": [1, 7],
        "x": [2],
        "z": [0]
    }, {
        "b": [8],
        "c": [7, 9, 10],
        "chinese": "挪再缺舷均沦赏匆辩槽豺",
        "id": 1631,
        "j": [4],
        "l": [5],
        "length": 11,
        "n": [0],
        "pinyin": "nzqxjlscbcc",
        "q": [2],
        "s": [6],
        "x": [3],
        "z": [1]
    }, {
        "b": [1],
        "chinese": "榴斌谎渝录",
        "h": [2],
        "id": 1632,
        "l": [0, 4],
        "length": 5,
        "pinyin": "lbhyl",
        "y": [3]
    }, {
        "chinese": "旋刀泳獭玫",
        "d": [1],
        "id": 1633,
        "length": 5,
        "m": [4],
        "pinyin": "xdytm",
        "t": [3],
        "x": [0],
        "y": [2]
    }, {
        "b": [5],
        "chinese": "旷孝甘漓悉叭丘运吊疹",
        "d": [8],
        "g": [2],
        "id": 1634,
        "k": [0],
        "l": [3],
        "length": 10,
        "pinyin": "kxglxbqydz",
        "q": [6],
        "x": [1, 4],
        "y": [7],
        "z": [9]
    }, {
        "c": [0],
        "chinese": "瓷刷膜圆",
        "id": 1635,
        "length": 4,
        "m": [2],
        "pinyin": "csmy",
        "s": [1],
        "y": [3]
    }, {
        "b": [6],
        "chinese": "虞刑萍叫笑寿鞭犁守益",
        "id": 1636,
        "j": [3],
        "l": [7],
        "length": 10,
        "p": [2],
        "pinyin": "yxpjxsblsy",
        "s": [5, 8],
        "x": [1, 4],
        "y": [0, 9]
    }, {
        "b": [3],
        "chinese": "愤体倾棒满政巫",
        "f": [0],
        "id": 1637,
        "length": 7,
        "m": [4],
        "pinyin": "ftqbmzw",
        "q": [2],
        "t": [1],
        "w": [6],
        "z": [5]
    }, {
        "chinese": "间悦淋各",
        "g": [3],
        "id": 1638,
        "j": [0],
        "l": [2],
        "length": 4,
        "pinyin": "jylg",
        "y": [1]
    }, {
        "b": [8],
        "c": [0],
        "chinese": "草犹侠樊吱欺绞圃谤",
        "f": [3],
        "id": 1639,
        "j": [6],
        "length": 9,
        "p": [7],
        "pinyin": "cyxfzqjpb",
        "q": [5],
        "x": [2],
        "y": [1],
        "z": [4]
    }, {
        "c": [7],
        "chinese": "诌烽蛙质航笛糜绸",
        "d": [5],
        "f": [1],
        "h": [4],
        "id": 1640,
        "length": 8,
        "m": [6],
        "pinyin": "zfwzhdmc",
        "w": [2],
        "z": [0, 3]
    }, {
        "chinese": "好疲蜗眠冬菱溪",
        "d": [4],
        "h": [0],
        "id": 1641,
        "l": [5],
        "length": 7,
        "m": [3],
        "p": [1],
        "pinyin": "hpwmdlx",
        "w": [2],
        "x": [6]
    }, {
        "chinese": "咒急止啦喝岂粤易",
        "h": [4],
        "id": 1642,
        "j": [1],
        "l": [3],
        "length": 8,
        "pinyin": "zjzlhqyy",
        "q": [5],
        "y": [6, 7],
        "z": [0, 2]
    }, {
        "b": [4],
        "c": [0],
        "chinese": "彻正絮绘鲍妮胎榴吮居",
        "h": [3],
        "id": 1643,
        "j": [9],
        "l": [7],
        "length": 10,
        "n": [5],
        "pinyin": "czxhbntlsj",
        "s": [8],
        "t": [6],
        "x": [2],
        "z": [1]
    }, {
        "b": [2],
        "c": [9],
        "chinese": "橇蛰膘颅咙葡趋倒灸挫及",
        "d": [7],
        "id": 1644,
        "j": [8, 10],
        "l": [3, 4],
        "length": 11,
        "p": [5],
        "pinyin": "qzbllpqdjcj",
        "q": [0, 6],
        "z": [1]
    }, {
        "b": [0, 3],
        "c": [2],
        "chinese": "冰蝇雏饼",
        "id": 1645,
        "length": 4,
        "pinyin": "bycb",
        "y": [1]
    }, {
        "b": [5],
        "c": [3],
        "chinese": "凳禁迹矗棕饱焰茧",
        "d": [0],
        "id": 1646,
        "j": [1, 2, 7],
        "length": 8,
        "pinyin": "djjczbyj",
        "y": [6],
        "z": [4]
    }, {
        "c": [6],
        "chinese": "涯蘸毯肪蚤弘闯",
        "f": [3],
        "h": [5],
        "id": 1647,
        "length": 7,
        "pinyin": "yztfzhc",
        "t": [2],
        "y": [0],
        "z": [1, 4]
    }, {
        "chinese": "峰涪雍副低伞沸山",
        "d": [4],
        "f": [0, 1, 3, 6],
        "id": 1648,
        "length": 8,
        "pinyin": "ffyfdsfs",
        "s": [5, 7],
        "y": [2]
    }, {
        "b": [1],
        "chinese": "羡帮窝钥押登疽俯",
        "d": [5],
        "f": [7],
        "id": 1649,
        "j": [6],
        "length": 8,
        "pinyin": "xbwyydjf",
        "w": [2],
        "x": [0],
        "y": [3, 4]
    }, {
        "b": [6, 10],
        "c": [2],
        "chinese": "探兽锄目酉风靶段顽赏别",
        "d": [7],
        "f": [5],
        "id": 1650,
        "length": 11,
        "m": [3],
        "pinyin": "tscmyfbdwsb",
        "s": [1, 9],
        "t": [0],
        "w": [8],
        "y": [4]
    }, {
        "chinese": "奈柔述椰既陆沸黍",
        "f": [6],
        "id": 1651,
        "j": [4],
        "l": [5],
        "length": 8,
        "n": [0],
        "pinyin": "nrsyjlfs",
        "r": [1],
        "s": [2, 7],
        "y": [3]
    }, {
        "chinese": "辉逝婉坷螺",
        "h": [0],
        "id": 1652,
        "k": [3],
        "l": [4],
        "length": 5,
        "pinyin": "hswkl",
        "s": [1],
        "w": [2]
    }, {
        "b": [2],
        "chinese": "九滔贝权",
        "id": 1653,
        "j": [0],
        "length": 4,
        "pinyin": "jtbq",
        "q": [3],
        "t": [1]
    }, {
        "b": [1],
        "c": [2, 9],
        "chinese": "枉变宠纤灌液殷尼佑踩",
        "g": [4],
        "id": 1654,
        "length": 10,
        "n": [7],
        "pinyin": "wbcxgyynyc",
        "w": [0],
        "x": [3],
        "y": [5, 6, 8]
    }, {
        "chinese": "且跪萧琢颅汀盐莉",
        "g": [1],
        "id": 1655,
        "l": [4, 7],
        "length": 8,
        "pinyin": "qgxzltyl",
        "q": [0],
        "t": [5],
        "x": [2],
        "y": [6],
        "z": [3]
    }, {
        "chinese": "囊西馏献",
        "id": 1656,
        "l": [2],
        "length": 4,
        "n": [0],
        "pinyin": "nxlx",
        "x": [1, 3]
    }, {
        "b": [3],
        "chinese": "窃颈珠败",
        "id": 1657,
        "j": [1],
        "length": 4,
        "pinyin": "qjzb",
        "q": [0],
        "z": [2]
    }, {
        "c": [1],
        "chinese": "盅迟抒愉湘",
        "id": 1658,
        "length": 5,
        "pinyin": "zcsyx",
        "s": [2],
        "x": [4],
        "y": [3],
        "z": [0]
    }, {
        "b": [1],
        "chinese": "罗憋枕欧",
        "id": 1659,
        "l": [0],
        "length": 4,
        "o": [3],
        "pinyin": "lbzo",
        "z": [2]
    }, {
        "b": [2],
        "chinese": "玖淌不洽和摇",
        "h": [4],
        "id": 1660,
        "j": [0],
        "length": 6,
        "pinyin": "jtbqhy",
        "q": [3],
        "t": [1],
        "y": [5]
    }, {
        "c": [3],
        "chinese": "郡渴克侈酶桐索奴",
        "id": 1661,
        "j": [0],
        "k": [1, 2],
        "length": 8,
        "m": [4],
        "n": [7],
        "pinyin": "jkkcmtsn",
        "s": [6],
        "t": [5]
    }, {
        "chinese": "狞滤洛旱哉剿绦叶萨筷诬",
        "h": [3],
        "id": 1662,
        "j": [5],
        "k": [9],
        "l": [1, 2],
        "length": 11,
        "n": [0],
        "pinyin": "nllhzjtyskw",
        "s": [8],
        "t": [6],
        "w": [10],
        "y": [7],
        "z": [4]
    }, {
        "c": [4],
        "chinese": "晒铰句静撮卓克",
        "id": 1663,
        "j": [1, 2, 3],
        "k": [6],
        "length": 7,
        "pinyin": "sjjjczk",
        "s": [0],
        "z": [5]
    }, {
        "b": [0, 3],
        "c": [6],
        "chinese": "拔辑那彪嘉篱初指",
        "id": 1664,
        "j": [1, 4],
        "l": [5],
        "length": 8,
        "n": [2],
        "pinyin": "bjnbjlcz",
        "z": [7]
    }, {
        "chinese": "页屯究洛闻着址言掳马",
        "id": 1665,
        "j": [2],
        "l": [3, 8],
        "length": 10,
        "m": [9],
        "pinyin": "ytjlwzzylm",
        "t": [1],
        "w": [4],
        "y": [0, 7],
        "z": [5, 6]
    }, {
        "chinese": "真尹齐楷钩",
        "g": [4],
        "id": 1666,
        "k": [3],
        "length": 5,
        "pinyin": "zyqkg",
        "q": [2],
        "y": [1],
        "z": [0]
    }, {
        "chinese": "括关揩恒",
        "g": [1],
        "h": [3],
        "id": 1667,
        "k": [0, 2],
        "length": 4,
        "pinyin": "kgkh"
    }, {
        "c": [3],
        "chinese": "屿仑缮残昏谊更拽箱茁",
        "g": [6],
        "h": [4],
        "id": 1668,
        "l": [1],
        "length": 10,
        "pinyin": "ylschygzxz",
        "s": [2],
        "x": [8],
        "y": [0, 5],
        "z": [7, 9]
    }, {
        "b": [7],
        "chinese": "旋望足烽添滇吏逼耕",
        "d": [5],
        "f": [3],
        "g": [8],
        "id": 1669,
        "l": [6],
        "length": 9,
        "pinyin": "xwzftdlbg",
        "t": [4],
        "w": [1],
        "x": [0],
        "z": [2]
    }, {
        "chinese": "仁虾允疙鳞来滑近饯",
        "g": [3],
        "h": [6],
        "id": 1670,
        "j": [7, 8],
        "l": [4, 5],
        "length": 9,
        "pinyin": "rxygllhjj",
        "r": [0],
        "x": [1],
        "y": [2]
    }, {
        "b": [1],
        "c": [6],
        "chinese": "梅巴耍酷楼蜕厂赞钎枚",
        "id": 1671,
        "k": [3],
        "l": [4],
        "length": 10,
        "m": [0, 9],
        "pinyin": "mbskltczqm",
        "q": [8],
        "s": [2],
        "t": [5],
        "z": [7]
    }, {
        "b": [5],
        "c": [1, 6, 7],
        "chinese": "描翠警转夫笆缠成酥权",
        "f": [4],
        "id": 1672,
        "j": [2],
        "length": 10,
        "m": [0],
        "pinyin": "mcjzfbccsq",
        "q": [9],
        "s": [8],
        "z": [3]
    }, {
        "chinese": "缺工涛勘仰",
        "g": [1],
        "id": 1673,
        "k": [3],
        "length": 5,
        "pinyin": "qgtky",
        "q": [0],
        "t": [2],
        "y": [4]
    }, {
        "c": [0, 1],
        "chinese": "查蹭交最胖坚雷止陆阅飘",
        "id": 1674,
        "j": [2, 5],
        "l": [6, 8],
        "length": 11,
        "p": [4, 10],
        "pinyin": "ccjzpjlzlyp",
        "y": [9],
        "z": [3, 7]
    }, {
        "chinese": "骡邵荔何饲藤重悍七",
        "h": [3, 7],
        "id": 1675,
        "l": [0, 2],
        "length": 9,
        "pinyin": "lslhstzhq",
        "q": [8],
        "s": [1, 4],
        "t": [5],
        "z": [6]
    }, {
        "b": [10],
        "c": [1, 4],
        "chinese": "京此琉儡辞垃猎浆沙均坝",
        "id": 1676,
        "j": [0, 7, 9],
        "l": [2, 3, 5, 6],
        "length": 11,
        "pinyin": "jcllclljsjb",
        "s": [8]
    }, {
        "b": [2],
        "chinese": "秀叮抱隐粤颂",
        "d": [1],
        "id": 1677,
        "length": 6,
        "pinyin": "xdbyys",
        "s": [5],
        "x": [0],
        "y": [3, 4]
    }, {
        "b": [3],
        "chinese": "喊姑晦疤涌荚赞追姆",
        "g": [1],
        "h": [0, 2],
        "id": 1678,
        "j": [5],
        "length": 9,
        "m": [8],
        "pinyin": "hghbyjzzm",
        "y": [4],
        "z": [6, 7]
    }, {
        "a": [8],
        "chinese": "教贸楔寐舆镭妻绽昂酪",
        "id": 1679,
        "j": [0],
        "l": [5, 9],
        "length": 10,
        "m": [1, 3],
        "pinyin": "jmxmylqzal",
        "q": [6],
        "x": [2],
        "y": [4],
        "z": [7]
    }, {
        "c": [0, 7],
        "chinese": "柴贼毗叶剑筋痒掺就贴",
        "id": 1680,
        "j": [4, 5, 8],
        "length": 10,
        "p": [2],
        "pinyin": "czpyjjycjt",
        "t": [9],
        "y": [3, 6],
        "z": [1]
    }, {
        "b": [3],
        "c": [2],
        "chinese": "砰舰础辈腋拂糜",
        "f": [5],
        "id": 1681,
        "j": [1],
        "length": 7,
        "m": [6],
        "p": [0],
        "pinyin": "pjcbyfm",
        "y": [4]
    }, {
        "c": [7],
        "chinese": "俏疫彤刚梯政靴察届阴旱",
        "g": [3],
        "h": [10],
        "id": 1682,
        "j": [8],
        "length": 11,
        "pinyin": "qytgtzxcjyh",
        "q": [0],
        "t": [2, 4],
        "x": [6],
        "y": [1, 9],
        "z": [5]
    }, {
        "c": [1],
        "chinese": "光初瘤渍礁",
        "g": [0],
        "id": 1683,
        "j": [4],
        "l": [2],
        "length": 5,
        "pinyin": "gclzj",
        "z": [3]
    }, {
        "chinese": "柳识惊底媚封挎嘶赡",
        "d": [3],
        "f": [5],
        "id": 1684,
        "j": [2],
        "k": [6],
        "l": [0],
        "length": 9,
        "m": [4],
        "pinyin": "lsjdmfkss",
        "s": [1, 7, 8]
    }, {
        "c": [8],
        "chinese": "输证铜吱秸弱迭郊炒护",
        "d": [6],
        "h": [9],
        "id": 1685,
        "j": [4, 7],
        "length": 10,
        "pinyin": "sztzjrdjch",
        "r": [5],
        "s": [0],
        "t": [2],
        "z": [1, 3]
    }, {
        "c": [0],
        "chinese": "筹诸蔚衙棠嘻驯",
        "id": 1686,
        "length": 7,
        "pinyin": "czwytxx",
        "t": [4],
        "w": [2],
        "x": [5, 6],
        "y": [3],
        "z": [1]
    }, {
        "chinese": "休砰达合欲晰运叫陕来饲",
        "d": [2],
        "h": [3],
        "id": 1687,
        "j": [7],
        "l": [9],
        "length": 11,
        "p": [1],
        "pinyin": "xpdhyxyjsls",
        "s": [8, 10],
        "x": [0, 5],
        "y": [4, 6]
    }, {
        "a": [7],
        "chinese": "僧众露窥勇奠赌澳恩妥说",
        "d": [5, 6],
        "e": [8],
        "id": 1688,
        "k": [3],
        "l": [2],
        "length": 11,
        "pinyin": "szlkyddaets",
        "s": [0, 10],
        "t": [9],
        "y": [4],
        "z": [1]
    }, {
        "b": [2],
        "chinese": "稽丈甭刑",
        "id": 1689,
        "j": [0],
        "length": 4,
        "pinyin": "jzbx",
        "x": [3],
        "z": [1]
    }, {
        "b": [3],
        "chinese": "确读派彪撼型凰宇谴疏",
        "d": [1],
        "h": [4, 6],
        "id": 1690,
        "length": 10,
        "p": [2],
        "pinyin": "qdpbhxhyqs",
        "q": [0, 8],
        "s": [9],
        "x": [5],
        "y": [7]
    }, {
        "a": [4],
        "chinese": "奢主龄陶熬",
        "id": 1691,
        "l": [2],
        "length": 5,
        "pinyin": "szlta",
        "s": [0],
        "t": [3],
        "z": [1]
    }, {
        "c": [6, 10],
        "chinese": "芹理亥亮梗距曹督婶绪催",
        "d": [7],
        "g": [4],
        "h": [2],
        "id": 1692,
        "j": [5],
        "l": [1, 3],
        "length": 11,
        "pinyin": "qlhlgjcdsxc",
        "q": [0],
        "s": [8],
        "x": [9]
    }, {
        "a": [0],
        "b": [1],
        "c": [4],
        "chinese": "阿笆涝邻橙家",
        "id": 1693,
        "j": [5],
        "l": [2, 3],
        "length": 6,
        "pinyin": "abllcj"
    }, {
        "chinese": "娱玉碌钩魄缔扰弃",
        "d": [5],
        "g": [3],
        "id": 1694,
        "l": [2],
        "length": 8,
        "p": [4],
        "pinyin": "yylgpdrq",
        "q": [7],
        "r": [6],
        "y": [0, 1]
    }, {
        "b": [7],
        "chinese": "旋陶再迄拈畏藕吧祝",
        "id": 1695,
        "length": 9,
        "n": [4],
        "o": [6],
        "pinyin": "xtzqnwobz",
        "q": [3],
        "t": [1],
        "w": [5],
        "x": [0],
        "z": [2, 8]
    }, {
        "chinese": "聊揉囚燥购",
        "g": [4],
        "id": 1696,
        "l": [0],
        "length": 5,
        "pinyin": "lrqzg",
        "q": [2],
        "r": [1],
        "z": [3]
    }, {
        "c": [4],
        "chinese": "蔷吴质猪寸请",
        "id": 1697,
        "length": 6,
        "pinyin": "qwzzcq",
        "q": [0, 5],
        "w": [1],
        "z": [2, 3]
    }, {
        "a": [7],
        "b": [2],
        "chinese": "加阵般寺调肥疾澳",
        "d": [4],
        "f": [5],
        "id": 1698,
        "j": [0, 6],
        "length": 8,
        "pinyin": "jzbsdfja",
        "s": [3],
        "z": [1]
    }, {
        "chinese": "失轧梯兜评",
        "d": [3],
        "id": 1699,
        "length": 5,
        "p": [4],
        "pinyin": "sytdp",
        "s": [0],
        "t": [2],
        "y": [1]
    }, {
        "b": [5, 8],
        "c": [0],
        "chinese": "搽稳薛蚀猫别辗资棒",
        "id": 1700,
        "length": 9,
        "m": [4],
        "n": [6],
        "pinyin": "cwxsmbnzb",
        "s": [3],
        "w": [1],
        "x": [2],
        "z": [7]
    },
        {
            "id": 1701,
            "chinese": "王维佳",
            "pinyin": "wwj",
            "length": 3,
            "j": [2],
            "w": [0, 1]
        },
        {
            "id": 1702,
            "chinese": "陈嘉宁",
            "pinyin": "cjn",
            "length": 3,
            "c": [0],
            "j": [1],
            "n": [2],
        },
        {
            "h": [1],
            "b": [2],
            "x": [3, 9],
            "r": [4],
            "j": [5],
            "g": [6, 10],
            "f": [7],
            "y": [8],
            "chinese": "上海宝信软件股份有限公司",
            "id": 1703,
            "length": 12,
            "pinyin": "shbxrjgfyxgs",
            "s": [0, 11]
        },
        {
            "c": [1],
            "y": [0],
            "chinese": "雨晨",
            "length": 2,
            "id": 1704,
            "pinyin": "yc",
        },
        {
            "id": 1705,
            "chinese": "一场演出一场演出",
            "pinyin": "ycycyc",
            "length": 8,
            "c": [1,3,5,7],
            "y": [0,2,4,6]
        },
        {
            "id": 1706,
            "chinese": "阮侃",
            "pinyin": "rk",
            "length": 2,
            "r": [0],
            "k": [1]
        },
        {
            "id": 1707,
            "chinese": "高天",
            "pinyin": "gt",
            "length": 2,
            "g": [0],
            "t": [1]
        },
    ];


/////////////////////////////////////////////////endofdatazone//////////////////////////////////////////////////////////////


//////////////////////////////////////////////////jsstore///////////////////////////////////
var dbNamejsstore = 'JsStore_Demo';


function getDbSchema() {
    var tblProduct = {
        name: 'Product',
        columns: [
            {
                name: 'id',
                primaryKey: true,
                autoIncrement: false
            },
            {
                name: 'chinese',
                notNull: true,
                dataType: JsStore.DATA_TYPE.String
            },
            {
                name: 'pinyin',
                notNull: true,
                dataType: JsStore.DATA_TYPE.String
            },
            {
                name: 'length',
                notNull: true,
                dataType: JsStore.DATA_TYPE.Number
            },
            {
                name: "a",
                notNull: false,
                dataType: JsStore.DATA_TYPE.Array
            },
            {
                name: 'b',
                notNull: false,
                dataType: JsStore.DATA_TYPE.Array
            },
            {
                name: 'c',
                notNull: false,
                dataType: JsStore.DATA_TYPE.Array
            },
            {
                name: 'd',
                notNull: false,
                dataType: JsStore.DATA_TYPE.Array
            },
            {
                name: 'e',
                notNull: false,
                dataType: JsStore.DATA_TYPE.Array
            },
            {
                name: 'f',
                notNull: false,
                dataType: JsStore.DATA_TYPE.Array
            },
            {
                name: 'g',
                notNull: false,
                dataType: JsStore.DATA_TYPE.Array
            },
            {
                name: 'h',
                notNull: false,
                dataType: JsStore.DATA_TYPE.Array
            },
            {
                name: 'i',
                notNull: false,
                dataType: JsStore.DATA_TYPE.Array
            },
            {
                name: 'j',
                notNull: false,
                dataType: JsStore.DATA_TYPE.Array
            },
            {
                name: 'k',
                notNull: false,
                dataType: JsStore.DATA_TYPE.Array
            },
            {
                name: 'l',
                notNull: false,
                dataType: JsStore.DATA_TYPE.Array
            },
            {
                name: 'm',
                notNull: false,
                dataType: JsStore.DATA_TYPE.Array
            },
            {
                name: 'n',
                notNull: false,
                dataType: JsStore.DATA_TYPE.Array
            },
            {
                name: 'o',
                notNull: false,
                dataType: JsStore.DATA_TYPE.Array
            },
            {
                name: 'p',
                notNull: false,
                dataType: JsStore.DATA_TYPE.Array
            },
            {
                name: 'q',
                notNull: false,
                dataType: JsStore.DATA_TYPE.Array
            },
            {
                name: 'r',
                notNull: false,
                dataType: JsStore.DATA_TYPE.Array
            },
            {
                name: 's',
                notNull: false,
                dataType: JsStore.DATA_TYPE.Array
            },
            {
                name: 't',
                notNull: false,
                dataType: JsStore.DATA_TYPE.Array
            },
            {
                name: 'u',
                notNull: false,
                dataType: JsStore.DATA_TYPE.Array
            },
            {
                name: 'v',
                notNull: false,
                dataType: JsStore.DATA_TYPE.Array
            },
            {
                name: 'w',
                notNull: false,
                dataType: JsStore.DATA_TYPE.Array
            },
            {
                name: 'x',
                notNull: false,
                dataType: JsStore.DATA_TYPE.Array
            },
            {
                name: 'y',
                notNull: false,
                dataType: JsStore.DATA_TYPE.Array
            },
            {
                name: 'z',
                notNull: false,
                dataType: JsStore.DATA_TYPE.Array
            }
        ]
    };
    var db = {
        name: dbNamejsstore,
        tables: [tblProduct]
    }
    return db;
}


var connection = new JsStore.Instance(new Worker('jsstore/jsstore.worker.min.js'));

function initJsStore() {
    connection.isDbExist(dbNamejsstore).then(function (isExist) {
        if (isExist) {
            connection.openDb(dbNamejsstore);
        } else {
            var database = getDbSchema();
            connection.createDb(database);
        }
    }).catch(function (err) {
        console.error(err);
    })
}

initJsStore();


connection.insert({
    into: 'Product',
    values: testDemoData,
    // values: testData0,
    upsert: true

}).then(function (rowsInserted) {
    if (rowsInserted > 0) {
        console.log('insert complete jsstore successfully added');
    }
}).catch(function (err) {
    console.log(err);
    console.log(err.message);
});

// console.log("i'm after insert")


function iscontaininarray(bbarray, x) {
    // bbarray.forEach( c =>{
    //     if (x === c){
    //         return true
    //     }
    // })
    for (var i in bbarray) {
        if (x === bbarray[i]) {
            return true
        }
    }
    return false;
}


// debugger;
// console.log ( iscontaininarray([33,55,6],5  ))


let allallresult = [];

function ddaa(tobeaddeddata) {
    // allallresult.append  (  data );
    // console.log(data);

    var hascontained = []

    if (allallresult.length === 0) {
        for (var i in tobeaddeddata) {
            allallresult.push(tobeaddeddata[i]);
        }
    } else {

        for (let j in tobeaddeddata) {
            // console.log(i,tobeaddeddata[i]);
            let everyaddedid = tobeaddeddata[j]["id"]


            for (let k in allallresult) {
                if (everyaddedid === allallresult[k]["id"]) {
                    console.log(allallresult[k], tobeaddeddata[j])
                    hascontained.push(everyaddedid)
                } else {

                }
            }
        }

        for (let ii in tobeaddeddata) {
            // console.log(hascontained)
            if (iscontaininarray(hascontained, tobeaddeddata[ii]["id"])) {

            } else {
                allallresult.push(tobeaddeddata[ii])
            }

        }
    }

    console.log(allallresult);
}


var searchresult = [];

function likefind(os,col, str, bbcc) {

    var whereobj = {};
    var whereliovj = {};
    whereliovj["like"] = "%" + str + "%";
    whereobj[col]=whereliovj;
    connection.select({
        from: os,
        order: {
            by: "length",
            type: "asc", //supprted sort type is - asc,desc
            idbSorting: true
        },
        where: whereobj,
            // {
            // pinyin: {
            //     like: "%" + str + "%"
            // },
        //
        // }
    }).then(function (results) {
        // results will be array of objects
        // console.log(results);
        // console.log(results);
        bbcc(results,str);

    }).catch(function (err) {
        console.log(err);
        console.log(err.message);
    });
}


//
//
//
//

function randnfindbypk(os, randlist, ccbb) {
    connection.select({
        from: os,
        where: {
            id: {
                in: randlist
            }
        }
    }).then(function (results) {
        // results will be array of objects
        // console.log(results);
        // console.log(results);
        ccbb(results);

    }).catch(function (err) {
        console.log(err);
        console.log(err.message);
    });
}


////////////////////////////////////////////////////////jsstore/////////////////////////////////////////////











///////////////////////////////////html event////////////////////////////////////////


// debugger;
// var errorl = [6];
// for (let jj = 0; jj < errorl.length; jj++) {
//     errorl.push(8)
// }
//


function iscontainhanzi(str) {
    if (escape(str).indexOf( "%u" )<0){
        return false;
    } else {
        return true;
    }
}


function indexofaletterinStr(strt,letter,startpoint=0,resultindex=[]){
    var sr = strt.indexOf(letter,startpoint)
    if (sr === -1){
        return resultindex
    }else{
        resultindex.push(sr)
        indexofaletterinStr(strt,letter,sr+1,resultindex)
    }
    return resultindex;
}




function tobestrong( thestringtobestrong,arrayofindex){
    var tstsl = thestringtobestrong.length;
    var tsts = thestringtobestrong.split('');
//    console.log(tsts);
    for (var i=0; i != arrayofindex.length ;i++){
        if (arrayofindex[i] >= tstsl)
            throw new Error("index out of thestringtobestrong range");
    }
    for (var i=0; i != arrayofindex.length ;i++){
        tsts.splice(arrayofindex[i], 1,  "<strong style='color: darkred'>"+thestringtobestrong[arrayofindex[i]]+"</strong>" )
    }
    // console.log(tsts);
    return tsts.join('')
};







function randtable() {
    // console.log("i'm in randtable");
    var thetable = document.getElementById("showtableer");
    // console.log( thetable.firstChild);
    // console.log( thetable.firstElementChild );
    // console.log(thetable);
    // console.log( thetable.rows.length );
    // console.log( thetable.children );
    // console.log( thetable.childList );
    // var tablechildrens = thetable.children;
    // var tablechildrens = thetable.childNodes;
    //
    // thetable.removeChild(thetable.childNodes[1]);
    // thetable.deleteRow(1);
    // var tbodyaaa = thetable.children[0];
    //
    // console.log( typeof tbodyaaa );
    //
    // var tbodycc = tbodyaaa.childElementCount ;
    // var tbodyc =  tbodyaaa.children ;
    //

    var rowl = thetable.rows.length;
    for (let j = 0; j < rowl - 1; j++) {
        thetable.deleteRow(1);
    }


    function cb0(rrrrr) {
        // console.log(rrrrr);
        var rrrrlength = rrrrr.length;
        var thetable = document.getElementById("showtableer");
        for (let i = 0; i < rrrrlength; i++) {
            var rrii = rrrrr[i];

            var tr = document.createElement("TR");
            var td0 = document.createElement("TD");
            td0.innerText = rrii.chinese;
            var td1 = document.createElement("TD");
            td1.innerText = rrii.pinyin;
            tr.appendChild(td0);
            tr.appendChild(td1);
            thetable.appendChild(tr);
        }
    };
    randnfindbypk("Product", ngerand(16, 1705), cb0);
}

randtable();


// debugger;

//document.getElementById("dummy").addEventListener("onupgradeneeded" ,()=>{ console.log("o.addEventListener")   },false);


// var wdb = new WWJDB("wwjdb_name", 1)
// wdb.opendb(wdb)

// console.log(wdb.opendb())

// debugger;
// console.log(wdb.db)


// console.log( document.getElementById("kwinput") );
// document.getElementById("kwinput").value = "ddd"

function removeallpinyinlist(){
    var pinyinullist = document.getElementById("pinyinlist");
    // console.log(pinyinullist.children );
    // console.log(pinyinullist.children.length );
    // console.log(pinyinullist.childNodes );
    // console.log(pinyinullist.children );
    var cl = pinyinullist.children.length;
    for (let f = 0; f < cl; f++) {
        pinyinullist.removeChild(pinyinullist.children[0]);
    }

}

function pinyinlistdisplay(bool){
    var pinyinullist = document.getElementById("pinyinmom");
    if (bool === true) {
        pinyinullist.style.display = "block"
    }else if(bool === false) {
        pinyinullist.style.display = "none"
    }
}







function daekeypress(eee){

}



window.addEventListener('keydown',
    function(e){
    if(e.keyIdentifier=='U+000A'||e.keyIdentifier=='Enter'||e.keyCode==13)
        {if(e.target.nodeName=='INPUT'&&e.target.type=='text')
            {e.preventDefault();return false;}}},
    true);



function keypressed(eee){
    // console.log(eee);

    if ( (eee.key === "ArrowUp") || (eee.key === "ArrowDown") || (eee.key === "Enter") ) {
        var pyl = document.getElementById("pinyinlist");
        var ullist = pyl.children;
        var firstli = ullist[0];
        var lastli = ullist[ullist.length-1 ];
        var foundindex = -1;

        for (let jj = 0; jj < ullist.length; jj++) {
            if (ullist[jj].className === "curr-sel") {
                foundindex = jj;
            }
        }


        if(foundindex === -1){
            firstli.className = "curr-sel";
        }else{
            ullist[foundindex].className = "no-sel";
            if (eee.key === "Enter"){
                document.getElementById("kwinput").value = ullist[foundindex].innerText;
                return
            }
                if (eee.key === "ArrowDown") {
                    if ( ullist[foundindex].nextElementSibling === null  ) {
                        firstli.className = "curr-sel";
                    }else {
                        ullist[foundindex].nextElementSibling.className = "curr-sel";
                    }
                }
                else if (eee.key === "ArrowUp"){
                    if ( ullist[foundindex].previousElementSibling === null  ) {
                        lastli.className = "curr-sel";
                    }else {
                        ullist[foundindex].previousElementSibling.className = "curr-sel";
                    }
                }
            }
        }
}





var inputformbuffer = [];

function OnInputC(e) {




    // console.log(jjdb);
    // console.log(wdb.db);
    // console.log("i'm inputting!!",e);
    // console.log("i'm inputting!!",e.srcElement);
    // console.log("i'm inputting!!",e.target);
// console.log(e.target.value);
    var inputsinglel = e.data;
    var inputtype = e.inputType;
    // console.log(inputsinglel);
    // console.log(inputtype);


    // switch (inputtype) {
    //     case ("insertText"):
    //         inputformbuffer.push(inputsinglel);
    //         break;
    //     case "deleteContentBackward":
    //         // inputformbuffer =
    //         break;
    //     default:
    //         break;
    // }

    inputformbuffer = e.target.value;
    inputformbuffer = inputformbuffer.toLowerCase();




    if (inputformbuffer.length === 0) {
        likefind('Product',"pinyin" ,"zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", ccbb)
        pinyinlistdisplay(false);
    } else {
        if (iscontainhanzi(inputformbuffer)){
            likefind('Product',"chinese", inputformbuffer, ccbb);
        }else{
            likefind('Product',"pinyin", inputformbuffer, ccbb);
        }
        pinyinlistdisplay(true);
    }


    function somefonfon(oneresult,searchstr){
        // console.log("i'm in somefonfon!!!")
        // console.log(oneresult)
        // console.log(searchstr)
        var serlist = searchstr.split('')
        // console.log( searchstr.split('') )

        // oneresult.forEach((xx,yy)=>{  no foreach
        //     console.log(xx,yy);
        // });

        var fcontainlist = [];
        for (let i in serlist){
            // console.log(serlist[i]);
            for (let k in oneresult){
                if (serlist[i] === k){
                    // console.log(i)
                    // console.log(k)
                    // console.log(oneresult[k])

                    oneresult[k].forEach((ee)=>{
                        fcontainlist.push(ee)
                    });
                }
            }
        }
        for (let i in serlist) {
            var singleletterresult = indexofaletterinStr(oneresult['chinese'],serlist[i])
            singleletterresult.forEach((i)=>{
                fcontainlist.push(i)
            })
        }

        return tobestrong(oneresult['chinese'] ,  fcontainlist);
    }


    function ccbb(rrr,searchstr) {
        // console.log("db returned data:");
        // console.log(rrr);
        // console.log(searchstr);


        removeallpinyinlist()


        var realdisplaynum = rrr.length;

        if (realdisplaynum > 26) {
            realdisplaynum = 26;
        }


        // console.log( typeof (inputform.value ) )
        // inputformbuffer = (inputform.value).split('');
        // console.log(inputformbuffer);
        // console.log(getObjectStore('wwjcustomers'));
        // getAllkeysfromStore(getObjectStore('wwjcustomers'));
        // somefunction(inputformbuffer)


        for (let k = 0; k < realdisplaynum; k++) {
            var bbb = document.createElement("LI");
            // console.log(rrr[k]);
            // console.log( somefonfon( rrr[k] ,searchstr) );

            // bbb.innerHTML = "<strong>" + rrr[k].chinese + "</strong>";
            bbb.innerHTML = somefonfon( rrr[k] ,searchstr);
            bbb.className = "sug-overflow"
            // console.log(bbb);
            pinyinullist.appendChild(bbb);
            // console.log(pinyinullist.children );
            addevelisterne();
        }


    };

    // console.log(searchresult);

    // if(inputsingled !== null)

    var inputform = document.getElementById("kwinput");

}

// console.log(jjdb);


// })();


function addevelisterne() {
    var allsugoverflows = document.getElementsByClassName("sug-overflow");
// console.log( allsugoverflows.item(0) )
    for (let k = 0; k < allsugoverflows.length; k++) {

        // console.log(allsugoverflows);

        allsugoverflows.item(k).addEventListener("click", function (event) {
            event.path.forEach((e) => {
                // console.log(e.tagName === "LI");
                if (e.tagName === "LI") {
                    document.getElementById("kwinput").value = e.innerText;


                    removeallpinyinlist();
                    pinyinlistdisplay(false);
                    return;
                }
            });
        });

        allsugoverflows.item(k).addEventListener("mouseover", function (event) {

            var ullist = document.getElementById("pinyinlist").children;

            for (let jj = 0; jj < ullist.length; jj++) {
                // console.log(ullist[jj]);
                // ullist[jj].style.backgroundColor = "white";
                ullist[jj].className = "no-sel";
            }

            event.path.forEach((e) => {
                // console.log(e.tagName === "LI");
                if (e.tagName === "LI") {
                    // e.style.backgroundColor = "Lavender ";
                    e.className = "curr-sel"
                    // document.getElementById("kwinput").value = e.innerText;
                    // console.log( e );
                    return;
                }
            });
        });
    }
}


var pinyinullist = document.getElementById("pinyinlist");

// console.log(pinyinullist.children);


