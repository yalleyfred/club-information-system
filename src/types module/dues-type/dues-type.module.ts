import { Module } from '@nestjs/common';
import { DuesTypeController } from './dues-type.controller';
import { DuesTypeService } from './dues-type.service';
import { DuesTypeAccessService } from './dues-type-data-access.service';

@Module({
  controllers: [DuesTypeController],
  providers: [DuesTypeService, DuesTypeAccessService],
})
export class DuesTypeModule {}
