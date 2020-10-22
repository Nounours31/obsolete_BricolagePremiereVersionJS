'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-22 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-2005';
    this._commitGIT = '3b8d7c6acbb750ac53743217593bf24e74c38f2a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}