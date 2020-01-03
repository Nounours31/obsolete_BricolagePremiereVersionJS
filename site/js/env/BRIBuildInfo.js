'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-03 12:00:04';
    this._versionBuild = 'jenkins-Bricolage-832';
    this._commitGIT = 'b56350eea86483862289bba87de70d7956a9afad';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}