import { Module } from '@nestjs/common';
import {UniqueEmail} from "./constraints/email-exists";

@Module({
  imports: [],
  controllers: [],
  components: [
      UniqueEmail
  ],
})
export class CommonModule {}
