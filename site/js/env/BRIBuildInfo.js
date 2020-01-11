'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-11 12:00:04';
    this._versionBuild = 'jenkins-Bricolage-864';
    this._commitGIT = '61a9b623e52c6c77121d6c6946d9e80a0cce9f91';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}