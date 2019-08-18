'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-18 08:00:03';
    this._versionBuild = 'jenkins-Bricolage-279';
    this._commitGIT = '3be84836d08317af583df6a22de646ac5c9562af';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}