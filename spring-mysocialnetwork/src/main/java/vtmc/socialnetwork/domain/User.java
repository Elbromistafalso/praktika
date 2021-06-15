package vtmc.socialnetwork.domain;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.JoinColumn;

@Entity
@Table(name = "user")
public class User {

    @Id
    private String userName;
    private String password;
    
    @OneToMany(mappedBy = "poster")
    private List<Post> posts = new ArrayList<>();
    
    @Lob
    private byte[] userPhoto;
    
    @ElementCollection
    Set<Long> likedPosts = new HashSet<>();
    
	public User(String userName, String password) {
		super();
		this.userName = userName;
		this.password = password;
	}

	public User() {}
	
	public void addLikedPost(Post post) {
		
		this.likedPosts.add(post.getId());
		post.getLikes().add(this.userName);
	}
	
	public Set<Long> getLikedPosts(){
		return this.likedPosts;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	public byte[] getUserPhoto() {
		return this.userPhoto;
	}
	
	public void setUserPhoto(byte[] userPhoto) {
		this.userPhoto = userPhoto;
	}
	
	public List<Post> getPosts(){
		return this.posts;
	}
	
	public void addPost(Post post) {
		this.posts.add(post);
	}
	
}
