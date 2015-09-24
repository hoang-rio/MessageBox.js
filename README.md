<meta charset="UTF_8">
<h1># MessageBox.js
Hộp thoại thông báo cho web</h1>
<h2>Hướng dẫn sử dụng:</h1>
<ol>
<li>Chèn MessageBox.js vào website của bạn! <script src="MessageBox.js"></script></li>
<li>Gọi MessageBox.Show('Nội dung muốn hiển thị',[MessageBoxButton],[MessageBox.type],[callback])
	<ul>Trong đó
		<li>MessageBoxButton là loại button muốn hiển thị trên MessageBox. Có hai loại đó là MessageBoxButton.Ok và MessageBoxButton.YesNo</li>
		<li>MessageBox.type là kiểu MessageBox có 2 loại đó là MessageBox.error và MessageBox.success</li>
		<li>callback các hàm thực thi khi bấm nút tương ứng ví dụ muốn hiện thông báo alert khi bấm nút Ok MessageBox.Show('Bấm ok',MessageBoxButton.Ok,MessageBox.success,{Ok: function(){alert('Bạn đã bấm ok');0}}])</li>
	</ul>
</li>
</ol>