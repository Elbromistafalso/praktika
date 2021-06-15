package vtmc.socialnetwork.dto;

import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class PostDto {
	
	
	private Long id;
	private String userName;
	private byte[] userPhoto;
	private String date;
	private String text;
	private byte[] photo;
	private int likes;
	private List<CommentDto> comments;
	
	public PostDto(){}
	
	
	
	public PostDto(Long id, String userName, byte[] userPhoto, String date, String text, byte[] photo, int likes,
			List<CommentDto> comments) {
		super();
		this.id = id;
		this.userName = userName;
		this.userPhoto = userPhoto;
		this.date = date;
		this.text = text;
		this.photo = photo;
		this.likes = likes;
		this.comments = comments;
	}



	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getText() {
		return this.text;
	}
	
	public void setText(String text) {
		this.text = text;
	}
	
	public byte[] getPhoto() {
		return this.photo;
	}
	
	public void setPhoto(byte[] photo) {
		this.photo = photo;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public byte[] getUserPhoto() {
		return userPhoto;
	}

	public void setUserPhoto(byte[] userPhoto) {
		this.userPhoto = userPhoto;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public int getLikes() {
		return likes;
	}

	public void setLikes(int likes) {
		this.likes = likes;
	}

	public List<CommentDto> getComments() {
		return comments;
	}

	public void setComments(List<CommentDto> comments) {
		this.comments = comments;
	}
	
	
	
	
	

}
