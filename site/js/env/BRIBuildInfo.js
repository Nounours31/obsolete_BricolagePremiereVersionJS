'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-10 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-616';
    this._commitGIT = 'a882fa4a535a1a588bc8da0f52b482be3019323f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}