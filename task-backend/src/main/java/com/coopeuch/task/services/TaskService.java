/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.coopeuch.task.services;


import com.coopeuch.task.dto.PageDto;
import com.coopeuch.task.dto.TaskDto;
import com.coopeuch.task.dto.request.TaskInCreate;
import com.coopeuch.task.dto.request.TaskInUpdate;

/**
 *
 * @author romerd
 */
public interface TaskService {
    TaskDto get(Long id);
    TaskDto create(TaskInCreate task);
    TaskDto update(Long id, TaskInUpdate task);
    void delete(Long id);
    PageDto<TaskDto> list(Integer page, Integer limit);
}
