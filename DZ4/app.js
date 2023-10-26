Vue.createApp ({
    data() {
        return {
            valueInput: "",
            needDoList: [],
            completeList: []
        };
    },
    methods: {
        handlyInput (event) {
            this.valueInput = event.target.value;
        },

        addTask () {
            if (this.valueInput === "") { return };
            this.needDoList.push ({
                title: this.valueInput,
                id: Math.random ()
            });
            this.valueInput = "";
        },

        doCheck (index, type) {
            if (type === 'need') {
                const completeMask = this.needDoList.splice (index, 1);
                this.completeList.push(...completeMask);
            } else {
                const noCompleteMask = this.completeList.splice (index, 1);
                this.needDoList.push(...noCompleteMask);
            }
        },

        remove (index, type) {
            const toDoList = type === 'need' ? this.needDoList : this.completeList;
            toDoList.splice(index, 1);
        },

        sorted () {                         
            // this.needDoList.sort(function(x, y) {
            //     return y.title- x.title;
            //   });
            //   return this.needDoList; 
            
            // return this.needDoList.sort((a, b) => (a > b ? 1 : -1));

            return this.needDoList.sort((a, b) => a.title.localeCompare(b.title));
        }
    }
}).mount('#app');