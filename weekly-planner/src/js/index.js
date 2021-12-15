import store from "./store/index.js"

function App(){
    
    this.todo = {
        monday : [],
        tuesday : [],
        wednesday : [],
        thursday : [],
        friday : [],
        saturday : [],
        sunday : []
    };

    this.currentDay = 'monday';

    this.init = () => {
        if(store.getLocalStorage()){
            this.todo = store.getLocalStorage();
        }
        render();
        initEventListeners();
    };

    const render = () => {
        const template = this.todo[this.currentDay].map((todoThing, index) => {
            return `
                <li data-todo-id="${index}" class="todo-list-item d-flex items-center py-2">
                <span class="w-100 pl-2 todo-name ${todoThing.finish ? "finish-work" : ""}">${todoThing.name}</span>
                <button
                    type="button"
                    class="bg-gray-50 text-gray-500 text-sm mr-1 todo-finish-button"
                >
                    완료
                </button>
                <button
                    type="button"
                    class="bg-gray-50 text-gray-500 text-sm mr-1 todo-edit-button"
                >
                    수정
                </button>
                <button
                    type="button"
                    class="bg-gray-50 text-gray-500 text-sm todo-remove-button"
                >
                    삭제
                </button>
            </li>`;
        }).join("");

        document.querySelector("#todo-list").innerHTML = template; 
        updateTodoCount();
    }

    const updateTodoCount = () => {
        const todoCount = this.todo[this.currentDay].length;
        document.querySelector(".todo-count").innerText = `총 ${todoCount}개`
    };

    const addTodoName = () => {
        if(document.querySelector("#todo-name").value === "") {
            alert("내용을 입력해주세요.");
            return;
        }
            const todoName = document.querySelector("#todo-name").value;
            this.todo[this.currentDay].push({ name:  todoName });   
            store.setLocalStorage(this.todo);
            render();  
            document.querySelector("#todo-name").value = "";
    };

    const updateTodoName = (e) => {
        const todoId = e.target.closest("li").dataset.todoId;
        const selectTodo = e.target.closest("li").querySelector(".todo-name");
        const updatedTodoName = prompt("내용을 수정해주세요", selectTodo.innerText);

        if(updatedTodoName === null) {
            alert("수정이 취소되었습니다 ")
            return;
        } else {
            this.todo[this.currentDay][todoId].name = updatedTodoName;
            store.setLocalStorage(this.todo);
            render();
        }
    }

    const removeTodoName = (e) => {
        if(confirm("정말 삭제하시겠습니까?")) {
            const todoId = e.target.closest("li").dataset.todoId;
            this.todo[this.currentDay].splice(todoId, 1);
            store.setLocalStorage(this.todo);
            render();
        }
    }


    const finishTodo = (e) => {
        const todoId = e.target.closest("li").dataset.todoId;
        this.todo[this.currentDay][todoId].finish = !this.todo[this.currentDay][todoId].finish;
        store.setLocalStorage(this.todo);
        render();
    }

    const initEventListeners = () => {
        document.querySelector("#todo-list").addEventListener("click", (e) => {
            if (e.target.classList.contains("todo-edit-button")) {
                updateTodoName(e);
                return;
            }
    
            if(e.target.classList.contains("todo-remove-button")) {
                removeTodoName(e);
                return;
            }
    
            if(e.target.classList.contains("todo-finish-button")) {
                finishTodo(e);
                return;
            }
        });
    
        document.querySelector("#todo-form").addEventListener("submit", (e) => {
            e.preventDefault();
        });
    
        document.querySelector("#todo-submit-button").addEventListener("click",addTodoName);
    
        document.querySelector("#todo-name")
            .addEventListener("keypress", (e) => {
                if (e.key !== "Enter") {
                    return;
                }
                addTodoName();
            });
    
        document.querySelector("nav").addEventListener("click", (e) => {
                const isDayButton = e.target.classList.contains("todo-day-name");
                if (isDayButton) {
                    const dayName = e.target.dataset.dayName;
                    this.currentDay = dayName;
                    document.querySelector("#day-title").innerText = `${e.target.innerText} 계획 리스트`
                    render();
                }
            });

        document.querySelector(".remove-all").addEventListener("click", (e) => {
            if(confirm("정말 플래너를 초기화 하시겠습니까?")){
                localStorage.clear();
                location.reload();
            }
        });

        };
    }

const app = new App();
app.init();