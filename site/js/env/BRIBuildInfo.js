'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-13 12:00:04';
    this._versionBuild = 'jenkins-Bricolage-748';
    this._commitGIT = 'beaeff2b06d4fcf795d0b04732dbcae8968756d2';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}