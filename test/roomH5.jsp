<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">

	<head>
		<title>我爱抓娃娃</title>
		<meta charset="utf-8">
		<meta name="format-detection" content="telephone=no">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
		<style>
			@media only screen and (min-width:320px) {
				html {
					font-size: 85.33333%
				}
			}
			
			@media only screen and (min-width:360px) {
				html {
					font-size: 96%
				}
			}
			
			@media only screen and (min-width:375px) {
				html {
					font-size: 100%
				}
			}
			
			@media only screen and (min-width:412px) {
				html {
					font-size: 109.86667%
				}
			}
			
			@media only screen and (min-width:414px) {
				html {
					font-size: 110.4%
				}
			}
			
			@media only screen and (min-width:480px) {
				html {
					font-size: 128%
				}
			}
			
			@media only screen and (min-width:640px) {
				html {
					font-size: 170.66667%
				}
			}
			
			@media only screen and (min-width:768px) {
				html {
					font-size: 204.8%
				}
			}
			
			::-webkit-scrollbar {
				display: none
			}
			
			img {
				display: block
			}
			
			em,
			i {
				font-style: normal;
				font-weight: 400
			}
			
			p {
				line-height: 1
			}
			
			a {
				text-decoration: none
			}
			
			a:active,
			a:focus {
				outline: 0
			}
			
			a:active,
			a:hover,
			a:link,
			a:visited {
				color: #000
			}
			
			table {
				border-spacing: 0;
				border-collapse: collapse
			}
			
			h1,
			h2,
			h3,
			h4,
			h5,
			h6,
			p {
				line-height: 1.4;
				font-weight: 400;
				font-style: normal
			}
			
			nav,
			ol li,
			ul li {
				list-style: none
			}
			
			body {
				background: rgba(0, 0, 0, .8);
				width: 100%;
				font-family: Helvetica, microsoft yahei, Arial, Verdana, sans-serif;
				-webkit-text-size-adjust: none
			}
			
			* {
				border: 0;
				margin: 0;
				padding: 0;
				-webkit-tap-highlight-color: transparent;
				-webkit-box-sizing: border-box;
				box-sizing: border-box;
				-webkit-touch-callout: none;
				-webkit-user-select: none
			}
			
			button,
			input,
			select,
			textarea {
				outline: 0;
				background: 0 0;
				border-radius: 0;
				-webkit-appearance: none;
				-webkit-user-select: text;
				-webkit-tap-highlight-color: transparent;
				-webkit-touch-callout: none
			}
			
			input::-webkit-inner-spin-button,
			input::-webkit-outer-spin-button {
				-webkit-appearance: none
			}
			
			.prompt-box {
				position: relative;
				left: 0;
				top: 0;
				width: 100%;
				background: -webkit-linear-gradient(-45deg, rgba(255, 238, 189, 1) 0, rgba(255, 217, 250, 1) 35%, rgba(196, 209, 255, 1) 100%);
				box-shadow: 0 0 .90625rem rgba(248, 59, 250, .35) inset;
				text-align: justify;
				font-size: .875rem;
				overflow: auto;
				-webkit-overflow-scrolling: touch
			}
			.details img {
				width: 100%
			}
		</style>
	</head>

	<body>
		<div class="prompt-box">
			<div class="details">
				${content}
			</div>
		</div>
	</body>
	<script src="${pageContext.request.contextPath}/theme/js/jquery.min.js"></script>
	<script src="${pageContext.request.contextPath}/theme/js/browser.js"></script>
	<script>
		$(function() {
			if($.os.android) {
				$('body').css('background', 'none');
			}
		})
	</script>

</html>