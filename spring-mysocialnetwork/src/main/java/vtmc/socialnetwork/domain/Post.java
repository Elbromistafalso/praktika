package vtmc.socialnetwork.domain;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import javax.persistence.CascadeType;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import vtmc.socialnetwork.dto.CommentDto;

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
	
	 private String date;
	 
	 private String text;
	 
	 @ElementCollection
	 Set<String> likes = new HashSet<>();;
	 
	 @OneToMany(cascade = CascadeType.REMOVE, mappedBy = "post")
	 private List<Comment> comments = new ArrayList<>();
	 
	 public Post() {}
	 
	 public Set<String> getLikes(){
		 return this.likes;
	 }
	 
	 public void setLikes(Set<String> likes) {
		 this.likes = likes;
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

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}
	
	public void addComment(Comment comment){
		this.comments.add(comment);
		comment.setPost(this);
	}

	public List<Comment> getComments() {
		return comments;
	}
	
	public List<CommentDto> getCommentDto() {
		return this.comments.stream().map(comment -> new CommentDto(comment.getId(), comment.getUserName(),
				comment.getUserPhoto(), comment.getText())).collect(Collectors.toList());
	}

	public void setComments(List<Comment> comments) {
		this.comments = comments;
	}
	
	
	 
	 

}
