'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-14 16:00:09';
    this._versionBuild = 'jenkins-Bricolage-1605';
    this._commitGIT = '3f5690ddb8e8cc3ef02e8aa3ba74d03c7ed5a287';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}