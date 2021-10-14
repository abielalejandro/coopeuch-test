/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.coopeuch.task.controllers;

import com.coopeuch.task.dto.PageDto;
import com.coopeuch.task.dto.TaskDto;
import com.coopeuch.task.dto.request.TaskInCreate;
import com.coopeuch.task.dto.request.TaskInUpdate;
import com.coopeuch.task.services.TaskService;
import javax.validation.Valid;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author romerd
 */

@RestController
@RequestMapping("/api/v1/tasks")
@CrossOrigin(origins = "*")
public class TaskController {
    
    @Autowired
    TaskService service;
    
    @RequestMapping(method = RequestMethod.GET, produces = {"application/json"} )
    public PageDto<TaskDto> list(
            @RequestParam(defaultValue = "1", name="page") @Min(1) Integer page,
            @RequestParam(defaultValue = "10", name="size") @Min(1) Integer limit
    ){
        return service.list(page,limit);
    }
    
    @RequestMapping(value="/{id}", method = RequestMethod.GET, produces = {"application/json"} )
    public TaskDto get(@PathVariable("id") @NotNull @Positive Long id)  {        
        return service.get(id);
    }
 
    @RequestMapping(method = RequestMethod.POST, produces = {"application/json"}, consumes = {"application/json"})
    public TaskDto create (@RequestBody @Valid @NotNull TaskInCreate dto) {
        return service.create(dto);
            
    }
    
    @RequestMapping(value="/{id}",method = RequestMethod.PUT, produces = {"application/json"}, consumes = {"application/json"})
    public TaskDto update (
            @PathVariable("id") @NotNull @Positive Long id,
            @RequestBody @Valid TaskInUpdate dto)  {
        return service.update(id,dto);
    }
    
    
    @RequestMapping (value="/{id}",method = RequestMethod.DELETE, produces = {"application/json"} )
    public void delete (@PathVariable("id") @NotNull @Positive Long id)  {
        service.delete(id);
    }
    
}
