'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-12 16:00:04';
    this._versionBuild = 'jenkins-Bricolage-501';
    this._commitGIT = '5b46e1e6caee02dfd2a6f9a058d9f325af497d76';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}