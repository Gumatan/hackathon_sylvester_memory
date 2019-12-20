<?php
$page = file_get_contents('https://www.cuisineaz.com/recettes/buche-de-noel-glacee-au-beurre-chocolat-30470.aspx');
$doc = new DOMDocument();
$doc->loadHTML($page);
$images = $doc->getElementsByTagName('img');
foreach($images as $image) {
    if ($image->getAttribute('data-src-small') != null) {
        echo $image->getAttribute('data-src-small') . '<br />';
    }
}
?>