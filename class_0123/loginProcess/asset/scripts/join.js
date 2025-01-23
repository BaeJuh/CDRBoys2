class Join {
    constructor(id) {
        this.id = id;
    }

    $(domId) {
        return document.getElementById(domId);
    }

    DBupdate(userInfo) {
        fetch("http://localhost:3000/join", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
            .then(() => {
                console.log(userInfo);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    eventManager() {
        addEventListener("click", (e) => {
            const target = e.target;

            switch (target.id) {
                case "joinButton":
                    const id = this.$("id").value.trim();
                    const pw = this.$("pw").value.trim();

                    if (/\w{4,10}/.test(pw) && /\d/.test(pw) && id !== "") {
                        // 가입 가능
                        this.DBupdate({ id: id, pw: pw });

                    } else {
                        alert("비밀번호에 문자와 숫자를 조합하여 주세요.");
                        this.$("pw").value = "";
                    }
            }
        });
    }

    run() {
        this.eventManager();
    }
}

const join = new Join("main");
join.run();