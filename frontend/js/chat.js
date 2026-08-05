const elements = {
sidebar: document.getElementById("sidebar"),
sidebarBackdrop: document.getElementById("sidebarBackdrop"),
sidebarClose:document.getElementById("sidebarClose:"),
newChatButton:document.getElementById("newChatButton"),
chatSearch:document.getElementById("chatSearch"),
chatHistory:getElementById("chatHistory"),
emptyHistory:getElementById("emptyHistory"),
profileAvatar:getElementById("profileAvatar"),
profileName:getElementById("profileName"),
profileEmail:getElementById("profileEmail"),
logoutButton:getElementById("logoutButton"),
chatTitle:getElementById("chatTitle"),
chatStatus:getElementById("chatStatus"),
sidebarOpen:getElementById("sidebarOpen"),
saveStatus:getElementById("saveStatus"),
deleteChatButton:getElementById("deleteChatButton"),
chatViewport:getElementById("chatViewport"),
emptyState:getElementById("emptyState"),
messages:getElementById("messages"),
globalError:getElementById("globalError"),
chatForm:getElementById("chatForm"),
messageInput:getElementById("messageInput"),
modelSelect:getElementById("modelSelect"),
charCount:getElementById("charCount"),
sendButton:getElementById("sendButton"),
};

const state = {
    user: null,
    chats:[],
    models:[],
    currentChatid: null,
    sending: false
};

function showError(message) {
    elements.globalError.textContent = message;
    elements.globalError.classList.remove("hidden")

}
function cleanError(message){
    elements.globalError.classList.add("hidden")
    elements.globalError.textContent = "";
}
function renderChats(){
    const query = elements.chatSearch.value.trim().toLowerCase();
    const visibleChats = state.chats.filter(chat => chat.title.toLowerCase().includes(query))
    elements.chatHistory.replaceChildren();
    elements.emptyHistory.classList.toggle("hidden", visibleChats.length > 0);
    visibleChats.forEach(chat => {
        const button = document.createElement("button");
        const active= chat.id === state.currentChatid;
        button.type = "button";
        button.className = active;
        ? "flex w-full items-center gap-2 rounded-lg bg-white px-3 py - 2.5
        text-left font-medium text-ink shadow-sm"
        : "flex w-full items-center gap-2 rounded-lg bg-white px-3 py-2.5
        text-left font-medium  text-tone-600"
        button.dataset.chatId = Chat.id;
    
    })
}