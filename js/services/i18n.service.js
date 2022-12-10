var gTrans = {
    header: {
        en: 'Book Shop',
        he: 'חנות ספרים'
    },
    'switch-lang': {
        en: 'עברית',
        he: 'English'
    },er: {
        en: 'Book Shop',
        he: 'חנות ספרים'
    },
    Id: {
        en: 'Id',
        he: 'ת.ז',
    },
    Title: {
        en: 'Title',
        he: 'שם הספר',
    },
    Price: {
        en: 'Price',
        he: 'מחיר'
    },
    Rating: {
        en: 'Rating',
        he: 'דירוג',
    },
    Actions: {
        en: 'Actions',
        he: 'פעולות',
    },
    'delete-btn': {
        en: 'Delete',
        he: 'מחק',
    },
    'update-btn': {
        en: 'Update',
        he: 'עדכון',
    },
    'read-btn': {
        en: 'Read',
        he: 'קרא עוד',
    },
    'add-btn': {
        en: 'Add book',
        he: 'הוסף ספר'
    },
    'modal-title': {
        en: 'Book Title',
        he: 'שם הספר'
    },
    'modal-price': {
        en: 'Price',
        he: 'מחיר'
    },
    'modal-rate': {
        en: 'Rate (1-10)',
        he: 'דירוג (1-10)'
    },
    'modal-description': {
        en: 'Book Description',
        he: 'תיאור הספר'
    },
    'modal-close-btn': {
        en: 'Close',
        he: 'סגור'
    },
    'please enter title': {
        en: 'please enter book title',
        he: 'הכנס שם ספר'
    },
    'please enter price': {
        en: 'please enter price',
        he: 'הכנס מחיר לספר'
    },
    'new price?': {
        en: 'new price?',
        he: 'מחיר חדש?'
    },
}

// console.log('data:', data-trans)
var gCurrLang = 'en'

function setLang() {
    gCurrLang === 'en' ? gCurrLang = 'he' : gCurrLang = 'en'
    return gCurrLang
}

function getTrans(transKey) {
    // done: if key is unknown return 'UNKNOWN'
    const key = gTrans[transKey]
    if (!key) return 'UNKNOWN'
    // done: get from gTrans
    var translation = key[gCurrLang]

    // done: If translation not found - use english
    if (!translation) translation = key.en

    return translation
}

function doTrans() {
    var els = document.querySelectorAll('[data-trans]')
    els.forEach(el => {
        const transKey = el.dataset.trans
        const translation = getTrans(transKey)
        el.innerText = translation    
        if (el.placeholder) el.placeholder = translation
    })
}