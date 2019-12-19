'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-19 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-771';
    this._commitGIT = '4bd542c7389bd58156e9d3c6461788c741a0ca56';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}