SELECT w.last_name, count(*) as num_of_articles FROM mydb.writer as w join mydb.article as a 
on w.id = a.writer_id group by w.first_name;

SELECT w.first_name, a.title FROM mydb.writer as w join mydb.article as a 
on w.id = a.writer_id where w.last_name = 'Mohammadi';

SELECT a.title as article, c.title as category FROM mydb.writer as w join mydb.article as a 
on w.id = a.writer_id join mydb.category as c on a.Category_id = c.id 
where w.first_name = 'Ali' and c.title = 'vc';

SELECT t.title as Tag_Title, count(*) as num FROM mydb.tag as t join mydb.tag_has_article as ta
on t.id = ta.Tag_id join mydb.Article as a on a.id = ta.Article_id group by t.title;

SELECT c.title FROM mydb.article as a right outer join mydb.category as c
on a.Category_id = c.id where a.title is null;

Select t1.first_name, t1.last_name from
(SELECT w.first_name, w.last_name FROM mydb.writer as w) t1
left outer join 
(SELECT w.first_name, w.last_name FROM mydb.writer as w join mydb.article as a
on w.id = a.Writer_id left outer join mydb.category as c on c.id = a.Category_id 
where c.title = 'os') t2
on t1.last_name = t2.last_name where t2.first_name is null;