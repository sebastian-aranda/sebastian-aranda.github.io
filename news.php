<?php
require('./class/simple_html_dom.php');

class article{
	public $title;
	public $image;
	public $author;
	public $date;

	function fillTemplate(){
		$html = '<div class="article"><img src="'.$this->image.'" alt="article_image"><div class="title">'.$this->title.'</div><div class="article_info"><span class="author">'.$this->author.'</span><span class="date">'.$this->date.'</span></div></div>';
		return $html;
	}
}

// Create DOM from URL
$html = file_get_html('http://www.sciencemag.org/news');

$articles = $html->find('div.view-article-lists-block-6 article.media');

$html = "";
foreach ($articles as $a){
	$article = new article();
	$link = $a->find('div.media__body a',0);
	$article->title = '<a href="http://www.sciencemag.org'.$link->href.'">'.$link->innertext.'</a>';
	$article->image = $a->find('div.media__icon img', 0)->src;
	$article->author = $a->find('div.media__body p a', 0)->innertext;
	$article->date = $a->find('div.media__body p time', 0)->innertext;

	$html .= $article->fillTemplate();
}

echo $html;

//Titulo


/*$url = 'http://www.sciencemag.org/news';
$content = file_get_contents($url);
$beginning = strpos($content, '<div class="view-article-lists-block-6">');
$content = substr($content, $beginning);
*/

?>