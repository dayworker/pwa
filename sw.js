self.addEventListener("fetch", function (e) {
	// 여기에 코드를 넣지 않아도 설치는 가능하다.
});

self.addEventListener("push", () => {
	self.registration.showNotification("Hello world!", {});
});
