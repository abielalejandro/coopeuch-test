/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.coopeuch.task.dao;

import com.coopeuch.task.exceptions.TaskNotFoundException;
import com.coopeuch.task.model.Task;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Repository;

/**
 *
 * @author romerd
 */

@Repository
public class TaskDaoImpl implements TaskDao{
    @Autowired
    TaskRepository repository;

    @Override
    public Task create(@NotNull @Valid Task task) {
        return repository.save(task);
    }

    @Override
    public Task update(@NotNull @Positive Long id, @NotNull @Valid Task task) {
        Task t= repository.findById(id).orElseThrow(()-> new TaskNotFoundException());
        t.setActive(task.getActive());
        t.setDescription(task.getDescription());
        return repository.save(t);
    }

    @Override
    public void delete(@NotNull @Positive Long id) {
        Task t= repository.findById(id).orElseThrow(()-> new TaskNotFoundException());
        repository.delete(t);
    }

    @Override
    public Page<Task> list(@NotNull @Positive Integer page, @NotNull @Positive Integer limit) {
        Pageable pageRequest = PageRequest.of(page-1, limit,Sort.by("createdAt"));
        return repository.findAll(pageRequest);
    }

    @Override
    public Task get(Long id) {
        return repository.findById(id).orElseThrow(()-> new TaskNotFoundException());
    }

    
}
