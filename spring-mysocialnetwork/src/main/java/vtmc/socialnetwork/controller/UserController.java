package vtmc.socialnetwork.controller;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import vtmc.socialnetwork.dto.UserDto;
import vtmc.socialnetwork.dto.UserInfo;
import vtmc.socialnetwork.service.UserService;

@RestController
public class UserController {
	
	@Autowired
	private UserService userService;
		
	@RequestMapping(path = "/user/registration", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.OK)
    public ResponseEntity<?> createUser(@Valid @RequestBody UserDto userDto) {
        return userService.createUser(userDto);
    }
	
	@RequestMapping(path = "/user/login", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.OK)
    public ResponseEntity<?> login(@Valid @RequestBody UserDto userDto) {
        return userService.login(userDto);
    }
	
	@RequestMapping(path = "/user/{userName}", method = RequestMethod.GET)
	@ResponseStatus(HttpStatus.OK)
    public UserInfo getUserInfo(@PathVariable String userName) {
        return userService.getUserInfo(userName);
    }
	
	@RequestMapping(value = "/user/{userName}/upload", method = RequestMethod.POST)
    public UserInfo uploadUserPhoto(@NotNull @RequestParam("file") MultipartFile file, @PathVariable String userName) {
       
		return userService.uploadUserPhoto(file, userName);
    }
	
	@RequestMapping(method = RequestMethod.GET)
	@ResponseStatus(HttpStatus.OK)
    public ResponseEntity<?> check() {
		return new ResponseEntity<>("Successful GET request", HttpStatus.OK);
    }


}
