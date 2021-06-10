package vtmc.socialnetwork.domain;

import java.sql.Timestamp;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "post")
public class Post {
	
	 @Id
	 @GeneratedValue(strategy = GenerationType.AUTO)
	 private Long id;
	 
	 @ManyToOne
	 private User poster;
	 
	 @Lob
	 private byte[] picture;
	 
	 @Temporal(TemporalType.TIMESTAMP)
	 private Date date;
	 
	 private String text;
	 
	 @ManyToMany(mappedBy = "likedPosts")
	 Set<User> likes = new HashSet<>();;
	 
	 public Post() {}
	 
	 public Set<User> getLikes(){
		 return this.likes;
	 }
	 
	 public Long getId(){
		 return this.id;
	 }
	 
	 public void setId(Long id) {
		 this.id = id;
	 }
	 
	 public byte[] getPicture() {
		 return this.picture;
	 }
	 
	 public void setPicture(byte[] picture) {
		 this.picture = picture;
	 }
	 
	 public User getPoster() {
		 return this.poster;
	 }
	 
	 public void setPoster(User poster) {
		 this.poster = poster;
		 poster.addPost(this);
	 }
	 
	 public String getText() {
		 return this.text;
	 }
	 
	 public void setText(String text) {
		 this.text = text;
	 }

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
	 
	 

}
