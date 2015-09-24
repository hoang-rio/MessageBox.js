<meta charset="UTF_8">
<h1># MessageBox.js
Hộp thoại thông báo cho web</h1>
<h2>Hướng dẫn sử dụng:</h1>
<ol>
<li>Chèn MessageBox.js vào website của bạn!</li>
<li>Gọi MessageBox.Show('Nội dung muốn hiển thị',[MessageBoxButton],[MessageBox.type],[callback])
	<ul>Trong đó
		<li>MessageBoxButton là loại button muốn hiển thị trên MessageBox. Có hai loại đó là MessageBoxButton.Ok và MessageBoxButton.YesNo</li>
		<li>MessageBox.type là kiểu MessageBox có 2 loại đó là MessageBox.error và MessageBox.success</li>
		<li>callback các hàm thực thi khi bấm nút tương ứng.
		Ví dụ muốn hiện thông báo alert khi bấm nút Ok MessageBox.Show('Bấm ok',MessageBoxButton.Ok,MessageBox.success,{Ok: function(){alert('Bạn đã bấm ok');}}])</li>
	</ul>
</li>
<li>MessageBox hỗ trợ 2 ngôn ngữ là tiếng anh và tiếng việt có thể thay đổi qua MessageBox.config.lang='vi' hoặc MessageBox.config.lang='en' mặc định là tiếng việt</li>
</ol>