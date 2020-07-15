'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-15 20:00:09';
    this._versionBuild = 'jenkins-Bricolage-1610';
    this._commitGIT = '29400c6b82a1ed709edc6b3e5c108b3c6c3a8565';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}