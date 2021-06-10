package vtmc.socialnetwork.service;

import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Base64;
import java.util.List;

import javax.imageio.ImageIO;
import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import vtmc.socialnetwork.dao.UserDao;
import vtmc.socialnetwork.domain.Post;
import vtmc.socialnetwork.domain.User;
import vtmc.socialnetwork.dto.UserDto;
import vtmc.socialnetwork.dto.UserInfo;

@Service
@Transactional
public class UserService{
	
    @Autowired
    private UserDao repository;
    @Autowired
    private BCryptPasswordEncoder passwordEncoder;
    
    public ResponseEntity<?> createUser(@Valid UserDto userDto){
        if (userNameExists(userDto.getUserName())) {
            return new ResponseEntity<>("There is an account with that userName: "
                    + userDto.getUserName(), HttpStatus.OK);
        }

        User user = new User();
        user.setUserName(userDto.getUserName());
        user.setPassword(passwordEncoder.encode(userDto.getPassword()));
        BufferedImage image;
        ByteArrayOutputStream baos = null;
		try {
			//image = ImageIO.read(getClass().getClassLoader().getResource("blank_avatar.png"));
			image = ImageIO.read(new FileInputStream("src/main/resources/img/blank_avatar.png"));
			baos = new ByteArrayOutputStream();
	        ImageIO.write(image, "png", baos);
	        byte[] bytes = baos.toByteArray();
	        user.setUserPhoto(bytes);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        repository.save(user);
        return new ResponseEntity<>("User succesfully registrated", HttpStatus.OK);
    }
    
    public UserInfo getUserInfo(String userName) {
    	User user = repository.getOne(userName);
    	if(user != null) {
    		UserInfo info = new UserInfo();
    		info.setUserPhoto(user.getUserPhoto());
    		return info;
    	}
    	
    	return null;
    }
    
	public UserInfo uploadUserPhoto(MultipartFile file, String userName){
		User user = repository.getOne(userName);
		if(user != null) {
		try {
			//user.setUserPhoto(Base64.getEncoder().encode(file.getBytes()));
			user.setUserPhoto(file.getBytes());
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return getUserInfo(userName);
		
		}
		
		return null;
		
	}
    
    
    public ResponseEntity<?> login(@Valid UserDto userDto){
    	
    	User possibleUser = repository.findByUserName(userDto.getUserName());
    	
    	if(possibleUser != null) {
    
    		if(passwordEncoder.matches(userDto.getPassword(), possibleUser.getPassword())) {	
    			return new ResponseEntity<>("User succesfully loggedIn", HttpStatus.OK);	
    		}
    	}
    	
    	return new ResponseEntity<>("Wrong credentials", HttpStatus.UNAUTHORIZED);
    	
    }
    
    private boolean userNameExists(String userName) {
        return repository.findByUserName(userName) != null;
    }
}