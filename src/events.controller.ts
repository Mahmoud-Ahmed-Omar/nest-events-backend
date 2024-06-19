import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

@Controller('/events')
export class EventsController {
  @Get()
  findAll() {
    // Logic to find all events
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return id;
  }

  @Post()
  create(@Body() createEventDto: any) {
    return createEventDto;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventDto: any) {
    return updateEventDto;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return id;
  }
}
