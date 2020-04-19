'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-19 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-1262';
    this._commitGIT = 'ea65ea54babcf63bc1235f9ac189483fba06b566';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}