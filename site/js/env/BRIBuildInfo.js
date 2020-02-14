'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-14 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1000';
    this._commitGIT = '7e5dcffded91ebac9a8d1acb736bf88312a16208';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}