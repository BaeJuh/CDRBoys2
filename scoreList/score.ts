interface IScoreList {
    id:string;
    fetchData: () => void;
}

class ScoreList implements IScoreList {
    public id: string;
    constructor(id: string) {
        this.id = id;
    }

    async fetchData():void {
        
    };
}