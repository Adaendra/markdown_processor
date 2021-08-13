class TocUtils {

    // ----- Constructor
    constructor() {
        this.title_list = []
    }

    // ----- Public Methods
    resetList() {
        this.title_list = []
    }

    addTitleToList(name, level, id) {
        this.title_list.push({
            name: name,
            level: level,
            id: id
        })
    }

}

module.exports = new TocUtils()
