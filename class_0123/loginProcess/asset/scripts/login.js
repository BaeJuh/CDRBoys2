class Login {
    constructor(id) {
        this.id = id;
    }

    $(domId) {
        return document.getElementById(domId);
    }

    // DBupdate(userInfo) {
    //     fetch("http://localhost:3000/join", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(userInfo)
    //     })
    //         .then(() => {
    //             console.log(userInfo);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }

    check(loginInfo) {
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginInfo)
        })
            .then(() => {
                console.log(loginInfo);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    eventManager() {
        addEventListener("click", (e) => {
            const target = e.target;

            switch (target.id) {
                case "loginButton":
                    const id = this.$("id").value.trim();
                    const pw = this.$("pw").value.trim();

                    this.check({ id: id, pw: pw });
            }
        });
    }

    run() {
        this.eventManager();
    }
}

const login = new Login("main");
login.run();