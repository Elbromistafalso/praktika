package vtmc.socialnetwork.service;

import java.io.IOException;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Base64;
import java.util.Date;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import vtmc.socialnetwork.dao.PostDao;
import vtmc.socialnetwork.dao.UserDao;
import vtmc.socialnetwork.domain.Post;
import vtmc.socialnetwork.domain.User;
import vtmc.socialnetwork.dto.LikesDto;
import vtmc.socialnetwork.dto.PostDto;
import vtmc.socialnetwork.dto.UserImageDto;

@Service
@Transactional
public class PostService {
	
	@Autowired
	private PostDao postDao;
	@Autowired
	private UserDao userDao;
	
	public ResponseEntity<?> createPost(String userName, PostDto postDto){
		
		User user = userDao.getOne(userName);
		Post post = new Post();
		post.setPoster(user);
		System.out.println("text of post is: " + postDto.getText());
		post.setText(postDto.getText());
		postDao.save(post);
		return new ResponseEntity<>("The poster " + post.getPoster().getUserName() + 
				"created post with id " + post.getId() + " was created", HttpStatus.OK);
	}
	
	public ResponseEntity<?> createPost(String userName, String text, MultipartFile photo){
		
		User user = userDao.getOne(userName);
		Post post = new Post();
		post.setPoster(user); 
		post.setDate(java.util.Date.from(LocalDateTime.now()
			      .atZone(ZoneId.systemDefault())
			      .toInstant()));
		System.out.println("date: " + java.util.Date.from(LocalDateTime.now()
			      .atZone(ZoneId.systemDefault())
			      .toInstant()));
		post.setText(text);
		try {
			post.setPicture(photo.getBytes());
		} catch (IOException e) {
			e.printStackTrace();
		}
		postDao.save(post);
		return new ResponseEntity<>("The poster " + post.getPoster().getUserName() + 
				"created post with id " + post.getId() + " was created", HttpStatus.OK);
	}	
	
	public ResponseEntity<?> saveFile(MultipartFile file){
		Post post = new Post();
		try {
			
			post.setPicture(Base64.getEncoder().encode(file.getBytes()));
		} catch (IOException e) {
			e.printStackTrace();
		}
		postDao.save(post);
		return new ResponseEntity<>("The post with Id " + post.getId() + " was saved", HttpStatus.OK);
		
	}
	
	public PostDto getPost() {
		
		Post post = postDao.getOne(1L);
		PostDto postDto = new PostDto();
		postDto.setUserName(post.getPoster().getUserName());
		postDto.setUserPhoto(post.getPoster().getUserPhoto());
		postDto.setDate(post.getDate());
		postDto.setText(post.getText());
		postDto.setPhoto(post.getPicture());
		return postDto;
		
	}
	
//    public PostDto getPostWithPhoto() {
//		
//		Post post = postDao.getOne(1L);
//		PostDto postDto = new PostDto();
//		postDto.setText(post.getText());
//		postDto.setPhoto(post.getPicture());
//		return postDto;
//		
//	}
	
	
	
	public byte[] getUserImage(long postId) {
		
		Post post = postDao.getOne(postId);
		
		if(post != null) {
			UserImageDto userImageDto = new UserImageDto();
			userImageDto.setUserImage(post.getPicture());
			return post.getPicture();
		}
		
		return null;
		
	}
	
	public ResponseEntity<?> addLike(String userName, long postId){
		
		 User user = userDao.findByUserName(userName);
		 Post post = postDao.getOne(postId);
		 
		 if(user.getLikedPosts().contains(post)) {
			 return new ResponseEntity<>("this post was already liked by this user", HttpStatus.OK);
		 }
		 
		 if(user != null && post != null) {
		 user.addLikedPost(post);
		 return new ResponseEntity<>("now this post has " + post.getLikes().size() + " likes.", HttpStatus.OK);
		 }
		 
		 return new ResponseEntity<>("There's no such user or post with such id", HttpStatus.OK);
	}
	
	public LikesDto getLikes(Long id) {
		
		Post post = postDao.getOne(id);
		
		if(post != null) {
			int nrOfLikes = post.getLikes().size();
			LikesDto likesDto = new LikesDto();
			likesDto.setLikes(nrOfLikes);
			return likesDto;
		}
		
		return null;
	}

}
