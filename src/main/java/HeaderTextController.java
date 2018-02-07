package com.ucsbmap.header;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HeaderTextController {

 @GetMapping("/headerText")
 public String greet() {
  return "UCSB Map";
 }
}
