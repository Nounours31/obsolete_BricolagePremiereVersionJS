'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-13 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-1112';
    this._commitGIT = 'fc32abda8577fb5c92dbddba1816765ec13c34f3';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}