'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-25 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-309';
    this._commitGIT = '9efe5d43ac4b721084f8d394990a1c78b00e1ba1';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}