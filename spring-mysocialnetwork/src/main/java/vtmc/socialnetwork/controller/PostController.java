package vtmc.socialnetwork.controller;

import java.util.List;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartResolver;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;

import vtmc.socialnetwork.dto.CommentDto;
import vtmc.socialnetwork.dto.LikesDto;
import vtmc.socialnetwork.dto.PostDto;
import vtmc.socialnetwork.dto.UserImageDto;
import vtmc.socialnetwork.service.PostService;

@RestController
public class PostController {
	
	@Autowired
	private PostService postService;
		
	@RequestMapping(path = "/post/create/{userName}", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.OK)
    public ResponseEntity<?> createPost(@PathVariable String userName, @RequestBody PostDto postDto) {
        return postService.createPost(userName, postDto);
    }
	
	@RequestMapping(path = "/postWithPhoto/create/{userName}", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.OK)
    public ResponseEntity<?> createPost(@PathVariable String userName, @RequestParam("text") String text,
    		@RequestParam("photo") MultipartFile file) {
        return postService.createPost(userName, text, file);
    }
	
	@RequestMapping(path = "/post/delete/{postId}", method = RequestMethod.DELETE)
	@ResponseStatus(HttpStatus.OK)
    public ResponseEntity<?> deletePost(@PathVariable Long postId) {
        return postService.deletePost(postId);
    }
	
	@RequestMapping(path = "/post/update/{postId}", method = RequestMethod.PUT)
	@ResponseStatus(HttpStatus.OK)
    public ResponseEntity<?> updatePost(@PathVariable Long postId, @RequestParam("text") String text,
    		@RequestParam("photo") MultipartFile file) {
        return postService.updatePost(postId, text, file);
    }	
	
	@RequestMapping(path = "/getPost/{postId}", method = RequestMethod.GET)
	@ResponseStatus(HttpStatus.OK)
    public PostDto getPost(@PathVariable Long postId) {
        return postService.getPost(postId);
    }
	
	@RequestMapping(path = "/posts", method = RequestMethod.GET)
	@ResponseStatus(HttpStatus.OK)
    public List<PostDto> getPosts() {
        return postService.getPosts();
    }
	
	@RequestMapping(path = "/post/addLike/{postId}/{userName}", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.OK)
    public ResponseEntity<?> addLike(@PathVariable final long postId, @PathVariable final String userName) {
        return postService.addLike(userName, postId);
    }
	
	@RequestMapping(path = "/post/{postId}/likes", method = RequestMethod.GET)
	@ResponseStatus(HttpStatus.OK)
    public LikesDto getLikes(@PathVariable final long postId) {
        return postService.getLikes(postId);
    }
	
	@RequestMapping(value = "/upload", method = RequestMethod.POST)
    public ResponseEntity<?> saveFile(@NotNull @RequestParam("file") MultipartFile file) {
       
		return postService.saveFile(file);
    }
	
	@RequestMapping(value = "/getImage/{postId}", produces = MediaType.IMAGE_JPEG_VALUE, method = RequestMethod.GET)
	public byte[] getImage(@PathVariable final long postId) {
		
		return postService.getUserImage(postId);
	}
	
	@RequestMapping(path = "/comment/{userName}/create/{postId}", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.OK)
    public ResponseEntity<?> createComment(@PathVariable String userName, @PathVariable Long postId,
    		@RequestBody CommentDto commentDto) {
        return postService.createComment(userName, postId, commentDto);
    }
	

}
