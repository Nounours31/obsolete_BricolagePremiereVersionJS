'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-10 20:00:12';
    this._versionBuild = 'jenkins-Bricolage-250';
    this._commitGIT = 'fff5464fec9a664d9ddf819508c2d282341d3297';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}