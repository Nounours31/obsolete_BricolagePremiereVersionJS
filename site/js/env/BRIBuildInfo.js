'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-05 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-595';
    this._commitGIT = '443cb5c5b0a443175c0bfd181203500734747918';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}