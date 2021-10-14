/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.coopeuch.task.services;

import com.coopeuch.task.dao.TaskDao;
import com.coopeuch.task.dto.PageDto;
import com.coopeuch.task.dto.TaskDto;
import com.coopeuch.task.dto.request.TaskInCreate;
import com.coopeuch.task.dto.request.TaskInUpdate;
import com.coopeuch.task.model.Task;
import com.coopeuch.task.utils.ConvertDTO;
import java.util.List;
import java.util.stream.Collectors;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

/**
 *
 * @author romerd
 */
@Service
public class TaskServiceImpl implements TaskService {

    @Autowired
    TaskDao dao;
    
    @Autowired
    ConvertDTO convertDTO;
    
    @Override
    public TaskDto create(@NotNull @Valid TaskInCreate task) {
        Task taskToCreate = (Task) convertDTO.create(task, Task.class);
        
        taskToCreate = dao.create(taskToCreate);
        
        return (TaskDto) convertDTO.create(taskToCreate, TaskDto.class);
    }

    @Override
    public TaskDto update(@NotNull @Positive Long id, @NotNull @Valid TaskInUpdate task) {
        Task taskToCreate = (Task) convertDTO.create(task, Task.class);
        
        taskToCreate = dao.update(id,taskToCreate);
        
        return (TaskDto) convertDTO.create(taskToCreate, TaskDto.class);
    }

    @Override
    public void delete(@NotNull @Positive Long id) {
        dao.delete(id);
    }

    @Override
    public PageDto<TaskDto> list(@NotNull @Positive Integer page, @NotNull @Positive Integer limit) {
        Page<Task> pageData= dao.list(page, limit);
        
        List<TaskDto> data = pageData
                .get()
                .map(item-> {
                    return (TaskDto) convertDTO.create(item, TaskDto.class); 
                } )
                .collect(Collectors.toList());

        PageDto<TaskDto> pagination = new PageDto<>(
            data,
            pageData.getTotalElements(),
            page,
            limit
        );
        
        return pagination;
        
    }

    @Override
    public TaskDto get(@NotNull @Positive Long id) {
        return (TaskDto) convertDTO.create(
                dao.get(id), 
                TaskDto.class); 
    }
    
}
