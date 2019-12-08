'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-08 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-730';
    this._commitGIT = '6ec72c005dec9ca5f24673cb4ffa56d5c5fda7f8';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}